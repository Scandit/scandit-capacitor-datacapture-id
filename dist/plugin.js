var capacitorScanditIdCapture = (function (exports, core) {
    'use strict';

    class CapacitorError {
        static fromJSON(json) {
            if (json && json.code && json.message) {
                return new CapacitorError(json.code, json.message);
            }
            else {
                return null;
            }
        }
        constructor(code, message) {
            this.code = code;
            this.message = message;
        }
    }
    const capacitorExec = (successCallback, errorCallback, pluginName, functionName, args) => {
        if (window.Scandit && window.Scandit.DEBUG) {
            // tslint:disable-next-line:no-console
            console.log(`Called native function: ${functionName}`, args, { success: successCallback, error: errorCallback });
        }
        const extendedSuccessCallback = (message) => {
            const shouldCallback = message && message.shouldNotifyWhenFinished;
            const finishCallbackID = shouldCallback ? message.finishCallbackID : null;
            const started = Date.now();
            let callbackResult;
            if (successCallback) {
                callbackResult = successCallback(message);
            }
            if (shouldCallback) {
                const maxCallbackDuration = 50;
                const callbackDuration = Date.now() - started;
                if (callbackDuration > maxCallbackDuration) {
                    // tslint:disable-next-line:no-console
                    console.log(`[SCANDIT WARNING] Took ${callbackDuration}ms to execute callback that's blocking native execution. You should keep this duration short, for more information, take a look at the documentation.`);
                }
                window.Capacitor.Plugins[pluginName].finishCallback([{
                        finishCallbackID,
                        result: callbackResult,
                    }]);
            }
        };
        const extendedErrorCallback = (error) => {
            if (errorCallback) {
                const capacitorError = CapacitorError.fromJSON(error);
                if (capacitorError !== null) {
                    error = capacitorError;
                }
                errorCallback(error);
            }
        };
        window.Capacitor.Plugins[pluginName][functionName](args).then(extendedSuccessCallback, extendedErrorCallback);
    };

    // tslint:disable-next-line:ban-types
    function ignoreFromSerialization(target, propertyName) {
        target.ignoredProperties = target.ignoredProperties || [];
        target.ignoredProperties.push(propertyName);
    }
    // tslint:disable-next-line:ban-types
    function nameForSerialization(customName) {
        return (target, propertyName) => {
            target.customPropertyNames = target.customPropertyNames || {};
            target.customPropertyNames[propertyName] = customName;
        };
    }
    class DefaultSerializeable {
        toJSON() {
            const properties = Object.keys(this);
            // use @ignoreFromSerialization to ignore properties
            const ignoredProperties = this.ignoredProperties || [];
            // use @ignoreFromSerializationIfNull to ignore properties if they're null
            const ignoredIfNullProperties = this.ignoredIfNullProperties || [];
            // use @nameForSerialization('customName') to rename properties in the JSON output
            const customPropertyNames = this.customPropertyNames || {};
            // use @serializationDefault({}) to use a different value in the JSON output if they're null
            const customPropertyDefaults = this.customPropertyDefaults || {};
            return properties.reduce((json, property) => {
                if (ignoredProperties.includes(property)) {
                    return json;
                }
                let value = this[property];
                if (value === undefined) {
                    return json;
                }
                // Ignore if it's null and should be ignored.
                // This is basically responsible for not including optional properties in the JSON if they're null,
                // as that's not always deserialized to mean the same as not present.
                if (value === null && ignoredIfNullProperties.includes(property)) {
                    return json;
                }
                if (value === null && customPropertyDefaults[property] !== undefined) {
                    value = customPropertyDefaults[property];
                }
                // Serialize if serializeable
                if (value != null && value.toJSON) {
                    value = value.toJSON();
                }
                // Serialize the array if the elements are serializeable
                if (Array.isArray(value)) {
                    value = value.map(e => e.toJSON ? e.toJSON() : e);
                }
                const propertyName = customPropertyNames[property] || property;
                json[propertyName] = value;
                return json;
            }, {});
        }
    }

    var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    class Point extends DefaultSerializeable {
        get x() {
            return this._x;
        }
        get y() {
            return this._y;
        }
        static fromJSON(json) {
            return new Point(json.x, json.y);
        }
        constructor(x, y) {
            super();
            this._x = x;
            this._y = y;
        }
    }
    __decorate$6([
        nameForSerialization('x')
    ], Point.prototype, "_x", void 0);
    __decorate$6([
        nameForSerialization('y')
    ], Point.prototype, "_y", void 0);
    class Quadrilateral extends DefaultSerializeable {
        get topLeft() {
            return this._topLeft;
        }
        get topRight() {
            return this._topRight;
        }
        get bottomRight() {
            return this._bottomRight;
        }
        get bottomLeft() {
            return this._bottomLeft;
        }
        static fromJSON(json) {
            return new Quadrilateral(Point.fromJSON(json.topLeft), Point.fromJSON(json.topRight), Point.fromJSON(json.bottomRight), Point.fromJSON(json.bottomLeft));
        }
        constructor(topLeft, topRight, bottomRight, bottomLeft) {
            super();
            this._topLeft = topLeft;
            this._topRight = topRight;
            this._bottomRight = bottomRight;
            this._bottomLeft = bottomLeft;
        }
    }
    __decorate$6([
        nameForSerialization('topLeft')
    ], Quadrilateral.prototype, "_topLeft", void 0);
    __decorate$6([
        nameForSerialization('topRight')
    ], Quadrilateral.prototype, "_topRight", void 0);
    __decorate$6([
        nameForSerialization('bottomRight')
    ], Quadrilateral.prototype, "_bottomRight", void 0);
    __decorate$6([
        nameForSerialization('bottomLeft')
    ], Quadrilateral.prototype, "_bottomLeft", void 0);
    var MeasureUnit;
    (function (MeasureUnit) {
        MeasureUnit["DIP"] = "dip";
        MeasureUnit["Pixel"] = "pixel";
        MeasureUnit["Fraction"] = "fraction";
    })(MeasureUnit || (MeasureUnit = {}));
    class NumberWithUnit extends DefaultSerializeable {
        get value() {
            return this._value;
        }
        get unit() {
            return this._unit;
        }
        static fromJSON(json) {
            return new NumberWithUnit(json.value, json.unit);
        }
        constructor(value, unit) {
            super();
            this._value = value;
            this._unit = unit;
        }
    }
    __decorate$6([
        nameForSerialization('value')
    ], NumberWithUnit.prototype, "_value", void 0);
    __decorate$6([
        nameForSerialization('unit')
    ], NumberWithUnit.prototype, "_unit", void 0);
    class PointWithUnit extends DefaultSerializeable {
        get x() {
            return this._x;
        }
        get y() {
            return this._y;
        }
        static fromJSON(json) {
            return new PointWithUnit(NumberWithUnit.fromJSON(json.x), NumberWithUnit.fromJSON(json.y));
        }
        static get zero() {
            return new PointWithUnit(new NumberWithUnit(0, MeasureUnit.Pixel), new NumberWithUnit(0, MeasureUnit.Pixel));
        }
        constructor(x, y) {
            super();
            this._x = x;
            this._y = y;
        }
    }
    __decorate$6([
        nameForSerialization('x')
    ], PointWithUnit.prototype, "_x", void 0);
    __decorate$6([
        nameForSerialization('y')
    ], PointWithUnit.prototype, "_y", void 0);
    class Rect extends DefaultSerializeable {
        get origin() {
            return this._origin;
        }
        get size() {
            return this._size;
        }
        constructor(origin, size) {
            super();
            this._origin = origin;
            this._size = size;
        }
    }
    __decorate$6([
        nameForSerialization('origin')
    ], Rect.prototype, "_origin", void 0);
    __decorate$6([
        nameForSerialization('size')
    ], Rect.prototype, "_size", void 0);
    class RectWithUnit extends DefaultSerializeable {
        get origin() {
            return this._origin;
        }
        get size() {
            return this._size;
        }
        constructor(origin, size) {
            super();
            this._origin = origin;
            this._size = size;
        }
    }
    __decorate$6([
        nameForSerialization('origin')
    ], RectWithUnit.prototype, "_origin", void 0);
    __decorate$6([
        nameForSerialization('size')
    ], RectWithUnit.prototype, "_size", void 0);
    class SizeWithUnit extends DefaultSerializeable {
        get width() {
            return this._width;
        }
        get height() {
            return this._height;
        }
        constructor(width, height) {
            super();
            this._width = width;
            this._height = height;
        }
    }
    __decorate$6([
        nameForSerialization('width')
    ], SizeWithUnit.prototype, "_width", void 0);
    __decorate$6([
        nameForSerialization('height')
    ], SizeWithUnit.prototype, "_height", void 0);
    class Size extends DefaultSerializeable {
        get width() {
            return this._width;
        }
        get height() {
            return this._height;
        }
        static fromJSON(json) {
            return new Size(json.width, json.height);
        }
        constructor(width, height) {
            super();
            this._width = width;
            this._height = height;
        }
    }
    __decorate$6([
        nameForSerialization('width')
    ], Size.prototype, "_width", void 0);
    __decorate$6([
        nameForSerialization('height')
    ], Size.prototype, "_height", void 0);
    class SizeWithAspect {
        get size() {
            return this._size;
        }
        get aspect() {
            return this._aspect;
        }
        constructor(size, aspect) {
            this._size = size;
            this._aspect = aspect;
        }
    }
    __decorate$6([
        nameForSerialization('size')
    ], SizeWithAspect.prototype, "_size", void 0);
    __decorate$6([
        nameForSerialization('aspect')
    ], SizeWithAspect.prototype, "_aspect", void 0);
    var SizingMode;
    (function (SizingMode) {
        SizingMode["WidthAndHeight"] = "widthAndHeight";
        SizingMode["WidthAndAspectRatio"] = "widthAndAspectRatio";
        SizingMode["HeightAndAspectRatio"] = "heightAndAspectRatio";
        SizingMode["ShorterDimensionAndAspectRatio"] = "shorterDimensionAndAspectRatio";
    })(SizingMode || (SizingMode = {}));
    class SizeWithUnitAndAspect {
        constructor() {
            this._shorterDimensionAndAspectRatio = null;
        }
        get widthAndHeight() {
            return this._widthAndHeight;
        }
        get widthAndAspectRatio() {
            return this._widthAndAspectRatio;
        }
        get heightAndAspectRatio() {
            return this._heightAndAspectRatio;
        }
        get shorterDimensionAndAspectRatio() {
            return this._shorterDimensionAndAspectRatio;
        }
        get sizingMode() {
            if (this.widthAndAspectRatio) {
                return SizingMode.WidthAndAspectRatio;
            }
            if (this.heightAndAspectRatio) {
                return SizingMode.HeightAndAspectRatio;
            }
            if (this.shorterDimensionAndAspectRatio) {
                return SizingMode.ShorterDimensionAndAspectRatio;
            }
            return SizingMode.WidthAndHeight;
        }
        static sizeWithWidthAndHeight(widthAndHeight) {
            const sizeWithUnitAndAspect = new SizeWithUnitAndAspect();
            sizeWithUnitAndAspect._widthAndHeight = widthAndHeight;
            return sizeWithUnitAndAspect;
        }
        static sizeWithWidthAndAspectRatio(width, aspectRatio) {
            const sizeWithUnitAndAspect = new SizeWithUnitAndAspect();
            sizeWithUnitAndAspect._widthAndAspectRatio = new SizeWithAspect(width, aspectRatio);
            return sizeWithUnitAndAspect;
        }
        static sizeWithHeightAndAspectRatio(height, aspectRatio) {
            const sizeWithUnitAndAspect = new SizeWithUnitAndAspect();
            sizeWithUnitAndAspect._heightAndAspectRatio = new SizeWithAspect(height, aspectRatio);
            return sizeWithUnitAndAspect;
        }
        static sizeWithShorterDimensionAndAspectRatio(shorterDimension, aspectRatio) {
            const sizeWithUnitAndAspect = new SizeWithUnitAndAspect();
            sizeWithUnitAndAspect._shorterDimensionAndAspectRatio = new SizeWithAspect(shorterDimension, aspectRatio);
            return sizeWithUnitAndAspect;
        }
        static fromJSON(json) {
            if (json.width && json.height) {
                return this.sizeWithWidthAndHeight(new SizeWithUnit(NumberWithUnit.fromJSON(json.width), NumberWithUnit.fromJSON(json.height)));
            }
            else if (json.width && json.aspect) {
                return this.sizeWithWidthAndAspectRatio(NumberWithUnit.fromJSON(json.width), json.aspect);
            }
            else if (json.height && json.aspect) {
                return this.sizeWithHeightAndAspectRatio(NumberWithUnit.fromJSON(json.height), json.aspect);
            }
            else if (json.shorterDimension && json.aspect) {
                return this.sizeWithShorterDimensionAndAspectRatio(NumberWithUnit.fromJSON(json.shorterDimension), json.aspect);
            }
            else {
                throw new Error(`SizeWithUnitAndAspectJSON is malformed: ${JSON.stringify(json)}`);
            }
        }
        // no member access so our coverage check doesn't pick it up
        // TODO: https://jira.scandit.com/browse/SDC-1773
        // tslint:disable-next-line:member-access
        toJSON() {
            switch (this.sizingMode) {
                case SizingMode.WidthAndAspectRatio:
                    return {
                        width: this.widthAndAspectRatio.size.toJSON(),
                        aspect: this.widthAndAspectRatio.aspect,
                    };
                case SizingMode.HeightAndAspectRatio:
                    return {
                        height: this.heightAndAspectRatio.size.toJSON(),
                        aspect: this.heightAndAspectRatio.aspect,
                    };
                case SizingMode.ShorterDimensionAndAspectRatio:
                    return {
                        shorterDimension: this.shorterDimensionAndAspectRatio.size.toJSON(),
                        aspect: this.shorterDimensionAndAspectRatio.aspect,
                    };
                default:
                    return {
                        width: this.widthAndHeight.width.toJSON(),
                        height: this.widthAndHeight.height.toJSON(),
                    };
            }
        }
    }
    __decorate$6([
        nameForSerialization('widthAndHeight')
    ], SizeWithUnitAndAspect.prototype, "_widthAndHeight", void 0);
    __decorate$6([
        nameForSerialization('widthAndAspectRatio')
    ], SizeWithUnitAndAspect.prototype, "_widthAndAspectRatio", void 0);
    __decorate$6([
        nameForSerialization('heightAndAspectRatio')
    ], SizeWithUnitAndAspect.prototype, "_heightAndAspectRatio", void 0);
    __decorate$6([
        nameForSerialization('shorterDimensionAndAspectRatio')
    ], SizeWithUnitAndAspect.prototype, "_shorterDimensionAndAspectRatio", void 0);
    class MarginsWithUnit extends DefaultSerializeable {
        get left() {
            return this._left;
        }
        get right() {
            return this._right;
        }
        get top() {
            return this._top;
        }
        get bottom() {
            return this._bottom;
        }
        static fromJSON(json) {
            return new MarginsWithUnit(NumberWithUnit.fromJSON(json.left), NumberWithUnit.fromJSON(json.right), NumberWithUnit.fromJSON(json.top), NumberWithUnit.fromJSON(json.bottom));
        }
        static get zero() {
            return new MarginsWithUnit(new NumberWithUnit(0, MeasureUnit.Pixel), new NumberWithUnit(0, MeasureUnit.Pixel), new NumberWithUnit(0, MeasureUnit.Pixel), new NumberWithUnit(0, MeasureUnit.Pixel));
        }
        constructor(left, right, top, bottom) {
            super();
            this._left = left;
            this._right = right;
            this._top = top;
            this._bottom = bottom;
        }
    }
    __decorate$6([
        nameForSerialization('left')
    ], MarginsWithUnit.prototype, "_left", void 0);
    __decorate$6([
        nameForSerialization('right')
    ], MarginsWithUnit.prototype, "_right", void 0);
    __decorate$6([
        nameForSerialization('top')
    ], MarginsWithUnit.prototype, "_top", void 0);
    __decorate$6([
        nameForSerialization('bottom')
    ], MarginsWithUnit.prototype, "_bottom", void 0);
    class Color {
        get redComponent() {
            return this.hexadecimalString.slice(0, 2);
        }
        get greenComponent() {
            return this.hexadecimalString.slice(2, 4);
        }
        get blueComponent() {
            return this.hexadecimalString.slice(4, 6);
        }
        get alphaComponent() {
            return this.hexadecimalString.slice(6, 8);
        }
        get red() {
            return Color.hexToNumber(this.redComponent);
        }
        get green() {
            return Color.hexToNumber(this.greenComponent);
        }
        get blue() {
            return Color.hexToNumber(this.blueComponent);
        }
        get alpha() {
            return Color.hexToNumber(this.alphaComponent);
        }
        static fromHex(hex) {
            return new Color(Color.normalizeHex(hex));
        }
        static fromRGBA(red, green, blue, alpha = 1) {
            const hexString = [red, green, blue, this.normalizeAlpha(alpha)]
                .reduce((hex, colorComponent) => hex + this.numberToHex(colorComponent), '');
            return new Color(hexString);
        }
        static hexToNumber(hex) {
            return parseInt(hex, 16);
        }
        static fromJSON(json) {
            return Color.fromHex(json);
        }
        static numberToHex(x) {
            x = Math.round(x);
            let hex = x.toString(16);
            if (hex.length === 1) {
                hex = '0' + hex;
            }
            return hex.toUpperCase();
        }
        static normalizeHex(hex) {
            // remove leading #
            if (hex[0] === '#') {
                hex = hex.slice(1);
            }
            // double digits if single digit
            if (hex.length < 6) {
                hex = hex.split('').map(s => s + s).join('');
            }
            // add alpha if missing
            if (hex.length === 6) {
                hex = hex + 'FF';
            }
            return hex.toUpperCase();
        }
        static normalizeAlpha(alpha) {
            if (alpha > 0 && alpha <= 1) {
                return 255 * alpha;
            }
            return alpha;
        }
        constructor(hex) {
            this.hexadecimalString = hex;
        }
        withAlpha(alpha) {
            const newHex = this.hexadecimalString.slice(0, 6) + Color.numberToHex(Color.normalizeAlpha(alpha));
            return Color.fromHex(newHex);
        }
        // no member access so our coverage check doesn't pick it up
        // TODO: https://jira.scandit.com/browse/SDC-1773
        // tslint:disable-next-line:member-access
        toJSON() {
            return this.hexadecimalString;
        }
    }
    var Orientation;
    (function (Orientation) {
        Orientation["Unknown"] = "unknown";
        Orientation["Portrait"] = "portrait";
        Orientation["PortraitUpsideDown"] = "portraitUpsideDown";
        Orientation["LandscapeRight"] = "landscapeRight";
        Orientation["LandscapeLeft"] = "landscapeLeft";
    })(Orientation || (Orientation = {}));
    var Direction;
    (function (Direction) {
        Direction["None"] = "none";
        Direction["Horizontal"] = "horizontal";
        Direction["LeftToRight"] = "leftToRight";
        Direction["RightToLeft"] = "rightToLeft";
        Direction["Vertical"] = "vertical";
        Direction["TopToBottom"] = "topToBottom";
        Direction["BottomToTop"] = "bottomToTop";
    })(Direction || (Direction = {}));

    var LogoStyle;
    (function (LogoStyle) {
        LogoStyle["Minimal"] = "minimal";
        LogoStyle["Extended"] = "extended";
    })(LogoStyle || (LogoStyle = {}));

    var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var RectangularViewfinderStyle;
    (function (RectangularViewfinderStyle) {
        RectangularViewfinderStyle["Legacy"] = "legacy";
        RectangularViewfinderStyle["Rounded"] = "rounded";
        RectangularViewfinderStyle["Square"] = "square";
    })(RectangularViewfinderStyle || (RectangularViewfinderStyle = {}));
    var RectangularViewfinderLineStyle;
    (function (RectangularViewfinderLineStyle) {
        RectangularViewfinderLineStyle["Light"] = "light";
        RectangularViewfinderLineStyle["Bold"] = "bold";
    })(RectangularViewfinderLineStyle || (RectangularViewfinderLineStyle = {}));
    var LaserlineViewfinderStyle;
    (function (LaserlineViewfinderStyle) {
        LaserlineViewfinderStyle["Legacy"] = "legacy";
        LaserlineViewfinderStyle["Animated"] = "animated";
    })(LaserlineViewfinderStyle || (LaserlineViewfinderStyle = {}));
    class RectangularViewfinderAnimation extends DefaultSerializeable {
        static fromJSON(json) {
            if (json === null) {
                return null;
            }
            return new RectangularViewfinderAnimation(json.looping);
        }
        get isLooping() {
            return this._isLooping;
        }
        constructor(isLooping) {
            super();
            this._isLooping = false;
            this._isLooping = isLooping;
        }
    }
    __decorate$5([
        nameForSerialization('isLooping')
    ], RectangularViewfinderAnimation.prototype, "_isLooping", void 0);

    var CapacitorFunction$1;
    (function (CapacitorFunction) {
        CapacitorFunction["GetDefaults"] = "getDefaults";
        CapacitorFunction["ContextFromJSON"] = "contextFromJSON";
        CapacitorFunction["DisposeContext"] = "disposeContext";
        CapacitorFunction["UpdateContextFromJSON"] = "updateContextFromJSON";
        CapacitorFunction["SubscribeContextListener"] = "subscribeContextListener";
        CapacitorFunction["SubscribeContextFrameListener"] = "subscribeContextFrameListener";
        CapacitorFunction["SetViewPositionAndSize"] = "setViewPositionAndSize";
        CapacitorFunction["ShowView"] = "showView";
        CapacitorFunction["HideView"] = "hideView";
        CapacitorFunction["ViewPointForFramePoint"] = "viewPointForFramePoint";
        CapacitorFunction["ViewQuadrilateralForFrameQuadrilateral"] = "viewQuadrilateralForFrameQuadrilateral";
        CapacitorFunction["SubscribeViewListener"] = "subscribeViewListener";
        CapacitorFunction["UnsubscribeViewListener"] = "unsubscribeViewListener";
        CapacitorFunction["GetCurrentCameraState"] = "getCurrentCameraState";
        CapacitorFunction["GetIsTorchAvailable"] = "getIsTorchAvailable";
        CapacitorFunction["GetLastFrame"] = "getLastFrame";
        CapacitorFunction["GetLastFrameOrNull"] = "getLastFrameOrNull";
        CapacitorFunction["EmitFeedback"] = "emitFeedback";
        CapacitorFunction["SubscribeVolumeButtonObserver"] = "subscribeVolumeButtonObserver";
        CapacitorFunction["UnsubscribeVolumeButtonObserver"] = "unsubscribeVolumeButtonObserver";
    })(CapacitorFunction$1 || (CapacitorFunction$1 = {}));
    const pluginName$1 = 'ScanditCaptureCoreNative';
    // tslint:disable-next-line:variable-name
    const Capacitor$1 = {
        pluginName: pluginName$1,
        defaults: {},
        exec: (success, error, functionName, args) => capacitorExec(success, error, pluginName$1, functionName, args),
    };

    var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var FrameSourceState;
    (function (FrameSourceState) {
        FrameSourceState["On"] = "on";
        FrameSourceState["Off"] = "off";
        FrameSourceState["Starting"] = "starting";
        FrameSourceState["Stopping"] = "stopping";
        FrameSourceState["Standby"] = "standby";
        FrameSourceState["BootingUp"] = "bootingUp";
        FrameSourceState["WakingUp"] = "wakingUp";
        FrameSourceState["GoingToSleep"] = "goingToSleep";
        FrameSourceState["ShuttingDown"] = "shuttingDown";
    })(FrameSourceState || (FrameSourceState = {}));
    var TorchState;
    (function (TorchState) {
        TorchState["On"] = "on";
        TorchState["Off"] = "off";
        TorchState["Auto"] = "auto";
    })(TorchState || (TorchState = {}));
    var CameraPosition;
    (function (CameraPosition) {
        CameraPosition["WorldFacing"] = "worldFacing";
        CameraPosition["UserFacing"] = "userFacing";
        CameraPosition["Unspecified"] = "unspecified";
    })(CameraPosition || (CameraPosition = {}));
    var VideoResolution;
    (function (VideoResolution) {
        VideoResolution["Auto"] = "auto";
        VideoResolution["HD"] = "hd";
        VideoResolution["FullHD"] = "fullHd";
        VideoResolution["UHD4K"] = "uhd4k";
    })(VideoResolution || (VideoResolution = {}));
    var FocusRange;
    (function (FocusRange) {
        FocusRange["Full"] = "full";
        FocusRange["Near"] = "near";
        FocusRange["Far"] = "far";
    })(FocusRange || (FocusRange = {}));
    var FocusGestureStrategy;
    (function (FocusGestureStrategy) {
        FocusGestureStrategy["None"] = "none";
        FocusGestureStrategy["Manual"] = "manual";
        FocusGestureStrategy["ManualUntilCapture"] = "manualUntilCapture";
        FocusGestureStrategy["AutoOnLocation"] = "autoOnLocation";
    })(FocusGestureStrategy || (FocusGestureStrategy = {}));
    var PrivateCameraProperty;
    (function (PrivateCameraProperty) {
        PrivateCameraProperty["CameraAPI"] = "api";
    })(PrivateCameraProperty || (PrivateCameraProperty = {}));
    class CameraSettings extends DefaultSerializeable {
        get focusRange() {
            return this.focus.range;
        }
        set focusRange(newRange) {
            this.focus.range = newRange;
        }
        get focusGestureStrategy() {
            return this.focus.focusGestureStrategy;
        }
        set focusGestureStrategy(newStrategy) {
            this.focus.focusGestureStrategy = newStrategy;
        }
        get shouldPreferSmoothAutoFocus() {
            return this.focus.shouldPreferSmoothAutoFocus;
        }
        set shouldPreferSmoothAutoFocus(newShouldPreferSmoothAutoFocus) {
            this.focus.shouldPreferSmoothAutoFocus = newShouldPreferSmoothAutoFocus;
        }
        static fromJSON(json) {
            const settings = new CameraSettings();
            settings.preferredResolution = json.preferredResolution;
            settings.zoomFactor = json.zoomFactor;
            settings.focusRange = json.focusRange;
            settings.zoomGestureZoomFactor = json.zoomGestureZoomFactor;
            settings.focusGestureStrategy = json.focusGestureStrategy;
            settings.shouldPreferSmoothAutoFocus = json.shouldPreferSmoothAutoFocus;
            if (json.properties != undefined) {
                for (const key of Object.keys(json.properties)) {
                    settings.setProperty(key, json.properties[key]);
                }
            }
            return settings;
        }
        constructor(settings) {
            super();
            this.focusHiddenProperties = [
                'range',
                'manualLensPosition',
                'shouldPreferSmoothAutoFocus',
                'focusStrategy',
                'focusGestureStrategy'
            ];
            this.preferredResolution = Capacitor$1.defaults.Camera.Settings.preferredResolution;
            this.zoomFactor = Capacitor$1.defaults.Camera.Settings.zoomFactor;
            this.zoomGestureZoomFactor = Capacitor$1.defaults.Camera.Settings.zoomGestureZoomFactor;
            this.api = 0;
            this.focus = {
                range: Capacitor$1.defaults.Camera.Settings.focusRange,
                focusGestureStrategy: Capacitor$1.defaults.Camera.Settings.focusGestureStrategy,
                shouldPreferSmoothAutoFocus: Capacitor$1.defaults.Camera.Settings.shouldPreferSmoothAutoFocus,
            };
            if (settings !== undefined && settings !== null) {
                Object.getOwnPropertyNames(settings).forEach(propertyName => {
                    this[propertyName] = settings[propertyName];
                });
            }
        }
        setProperty(name, value) {
            if (this.focusHiddenProperties.includes(name)) {
                this.focus[name] = value;
                return;
            }
            this[name] = value;
        }
        getProperty(name) {
            if (this.focusHiddenProperties.includes(name)) {
                return this.focus[name];
            }
            return this[name];
        }
    }
    __decorate$4([
        ignoreFromSerialization
    ], CameraSettings.prototype, "focusHiddenProperties", void 0);

    const defaultsFromJSON = (json) => {
        return {
            IdCapture: {
                RecommendedCameraSettings: CameraSettings
                    .fromJSON(json.RecommendedCameraSettings),
                IdCaptureOverlayDefaults: {
                    defaultCapturedBrush: {
                        fillColor: Color
                            .fromJSON(json.IdCaptureOverlay.DefaultCapturedBrush.fillColor),
                        strokeColor: Color
                            .fromJSON(json.IdCaptureOverlay.DefaultCapturedBrush.strokeColor),
                        strokeWidth: json.IdCaptureOverlay.DefaultCapturedBrush.strokeWidth,
                    },
                    defaultLocalizedBrush: {
                        fillColor: Color
                            .fromJSON(json.IdCaptureOverlay.DefaultLocalizedBrush.fillColor),
                        strokeColor: Color
                            .fromJSON(json.IdCaptureOverlay.DefaultLocalizedBrush.strokeColor),
                        strokeWidth: json.IdCaptureOverlay.DefaultLocalizedBrush.strokeWidth,
                    },
                    defaultRejectedBrush: {
                        fillColor: Color
                            .fromJSON(json.IdCaptureOverlay.DefaultRejectedBrush.fillColor),
                        strokeColor: Color
                            .fromJSON(json.IdCaptureOverlay.DefaultRejectedBrush.strokeColor),
                        strokeWidth: json.IdCaptureOverlay.DefaultRejectedBrush.strokeWidth,
                    },
                },
            },
        };
    };

    const pluginName = 'ScanditIdNative';
    // tslint:disable-next-line:variable-name
    const Capacitor = {
        pluginName,
        defaults: {},
        exec: (success, error, functionName, args) => capacitorExec(success, error, pluginName, functionName, args),
    };
    var CapacitorFunction;
    (function (CapacitorFunction) {
        CapacitorFunction["GetDefaults"] = "getDefaults";
        CapacitorFunction["SubscribeIdCaptureListener"] = "subscribeIdCaptureListener";
        CapacitorFunction["ResetIdCapture"] = "resetIdCapture";
        CapacitorFunction["VerifyCapturedId"] = "verifyCapturedId";
    })(CapacitorFunction || (CapacitorFunction = {}));
    const getDefaults = async () => {
        await window.Capacitor.Plugins[pluginName][CapacitorFunction.GetDefaults]()
            .then((defaultsJSON) => {
            const defaults = defaultsFromJSON(defaultsJSON);
            Capacitor.defaults = defaults;
        })
            .catch((error) => {
            // tslint:disable-next-line:no-console
            console.warn(error);
        });
        return Capacitor.defaults;
    };

    class IdCaptureProxy {
        static forIdCapture(idCapture) {
            const proxy = new IdCaptureProxy();
            proxy.idCapture = idCapture;
            return proxy;
        }
        reset() {
            return new Promise((resolve, reject) => {
                IdCaptureProxy.cordovaExec(resolve, reject, CapacitorFunction.ResetIdCapture, null);
            });
        }
        verifyCapturedId(capturedId) {
            // Necessary for not exposing internal API on CapturedId, while only passing the private "json" property
            // to native iOS and Android.
            const capturedIdJsonData = JSON.parse(capturedId).json;
            return window.Capacitor.Plugins[Capacitor.pluginName][CapacitorFunction.VerifyCapturedId]({
                capturedId: JSON.stringify(capturedIdJsonData),
            });
        }
    }
    IdCaptureProxy.cordovaExec = Capacitor.exec;

    var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    class DateResult {
        get day() { return this.json.day; }
        get month() { return this.json.month; }
        get year() { return this.json.year; }
        static fromJSON(json) {
            if (json === null) {
                return null;
            }
            const dateResult = new DateResult();
            dateResult.json = json;
            return dateResult;
        }
    }
    class ProfessionalDrivingPermit {
        get dateOfExpiry() {
            return DateResult.fromJSON(this.json.dateOfExpiry);
        }
        get codes() { return this.json.codes; }
        static fromJSON(json) {
            if (json === null) {
                return null;
            }
            const object = new ProfessionalDrivingPermit();
            object.json = json;
            return object;
        }
    }
    class VehicleRestriction {
        get vehicleCode() { return this.json.vehicleCode; }
        get vehicleRestriction() { return this.json.vehicleRestriction; }
        get dateOfIssue() {
            return DateResult.fromJSON(this.json.dateOfIssue);
        }
        static fromJSON(json) {
            if (json === null) {
                return null;
            }
            const object = new VehicleRestriction();
            object.json = json;
            return object;
        }
    }
    class CommonCapturedIdFields {
        get firstName() { return this.json.firstName; }
        get lastName() { return this.json.lastName; }
        get fullName() { return this.json.fullName; }
        get sex() { return this.json.sex; }
        get dateOfBirth() {
            return DateResult.fromJSON(this.json.dateOfBirth);
        }
        get nationality() { return this.json.nationality; }
        get address() { return this.json.address; }
        get documentType() { return this.json.documentType; }
        get documentNumber() { return this.json.documentNumber; }
        get issuingCountry() { return this.json.issuingCountry; }
        get issuingCountryIso() { return this.json.issuingCountryIso; }
        get dateOfExpiry() {
            return DateResult.fromJSON(this.json.dateOfExpiry);
        }
        get dateOfIssue() {
            return DateResult.fromJSON(this.json.dateOfIssue);
        }
        static fromJSON(json) {
            if (json === null) {
                return null;
            }
            const object = new CommonCapturedIdFields();
            object.json = json;
            return object;
        }
    }
    class CapturedId {
        get firstName() { return this.commonCapturedFields.firstName; }
        get lastName() { return this.commonCapturedFields.lastName; }
        get fullName() { return this.commonCapturedFields.fullName; }
        get sex() { return this.commonCapturedFields.sex; }
        get dateOfBirth() {
            return DateResult.fromJSON(this.commonCapturedFields.dateOfBirth);
        }
        get nationality() { return this.commonCapturedFields.nationality; }
        get address() { return this.commonCapturedFields.address; }
        get capturedResultType() { return this.json.capturedResultType; }
        get capturedResultTypes() {
            return this.json.capturedResultTypes;
        }
        get documentType() { return this.commonCapturedFields.documentType; }
        get issuingCountryIso() { return this.commonCapturedFields.issuingCountryIso; }
        get issuingCountry() { return this.commonCapturedFields.issuingCountry; }
        get documentNumber() { return this.commonCapturedFields.documentNumber; }
        get dateOfExpiry() {
            return DateResult.fromJSON(this.commonCapturedFields.dateOfExpiry);
        }
        get dateOfIssue() {
            return DateResult.fromJSON(this.commonCapturedFields.dateOfIssue);
        }
        get aamvaBarcodeResult() {
            if (this._aamvaBarcodeResult == null && this.json.aamvaBarcodeResult != null) {
                this._aamvaBarcodeResult = AAMVABarcodeResult.
                    fromJSON(this.json.aamvaBarcodeResult);
            }
            return this._aamvaBarcodeResult;
        }
        get argentinaIdBarcodeResult() {
            if (this._argentinaIdBarcodeResult == null && this.json.argentinaIdBarcodeResult != null) {
                this._argentinaIdBarcodeResult = ArgentinaIdBarcodeResult.
                    fromJSON(this.json.argentinaIdBarcodeResult);
            }
            return this._argentinaIdBarcodeResult;
        }
        get colombiaIdBarcodeResult() {
            if (this._colombiaIdBarcodeResult == null && this.json.colombiaIdBarcodeResult != null) {
                this._colombiaIdBarcodeResult = ColombiaIdBarcodeResult.
                    fromJSON(this.json.colombiaIdBarcodeResult);
            }
            return this._colombiaIdBarcodeResult;
        }
        get mrzResult() {
            if (this._mrzResult == null && this.json.mrzResult != null) {
                this._mrzResult = MRZResult.fromJSON(this.json.mrzResult);
            }
            return this._mrzResult;
        }
        get southAfricaIdBarcodeResult() {
            if (this._southAfricaIdBarcodeResult == null && this.json.southAfricaIdBarcodeResult != null) {
                this._southAfricaIdBarcodeResult = SouthAfricaIdBarcodeResult.
                    fromJSON(this.json.southAfricaIdBarcodeResult);
            }
            return this._southAfricaIdBarcodeResult;
        }
        get southAfricaDlBarcodeResult() {
            if (this._southAfricaDlBarcodeResult == null && this.json.southAfricaDlBarcodeResult != null) {
                this._southAfricaDlBarcodeResult = SouthAfricaDlBarcodeResult.
                    fromJSON(this.json.southAfricaDlBarcodeResult);
            }
            return this._southAfricaDlBarcodeResult;
        }
        get usUniformedServicesBarcodeResult() {
            if (this._usUniformedServicesBarcodeResult == null && this.json.usUniformedServicesBarcodeResult != null) {
                const fromJSON = USUniformedServicesBarcodeResult.fromJSON;
                this._usUniformedServicesBarcodeResult = fromJSON(this.json.usUniformedServicesBarcodeResult);
            }
            return this._usUniformedServicesBarcodeResult;
        }
        get vizResult() {
            if (this._vizResult == null && this.json.vizResult != null) {
                this._vizResult = VIZResult.fromJSON(this.json.vizResult);
            }
            return this._vizResult;
        }
        static fromJSON(json) {
            const result = new CapturedId();
            result.json = json;
            if (json.aamvaBarcodeResult) {
                result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.aamvaBarcodeResult);
            }
            if (json.argentinaIdBarcodeResult) {
                result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.argentinaIdBarcodeResult);
            }
            if (json.colombiaIdBarcodeResult) {
                result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.colombiaIdBarcodeResult);
            }
            if (json.mrzResult) {
                result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.mrzResult);
            }
            if (json.southAfricaIdBarcodeResult) {
                result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.southAfricaIdBarcodeResult);
            }
            if (json.southAfricaDlBarcodeResult) {
                result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.southAfricaDlBarcodeResult);
            }
            if (json.usUniformedServicesBarcodeResult) {
                result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.usUniformedServicesBarcodeResult);
            }
            if (json.vizResult) {
                result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.vizResult);
            }
            return result;
        }
        idImageOfType(type) {
            if (this.json.imageInfo === null) {
                return null;
            }
            return this.json.imageInfo[type];
        }
    }
    class AAMVABarcodeResult {
        get aamvaVersion() { return this.json.aamvaVersion; }
        get aliasFamilyName() { return this.json.aliasFamilyName; }
        get aliasGivenName() { return this.json.aliasGivenName; }
        get aliasSuffixName() { return this.json.aliasSuffixName; }
        get driverNamePrefix() { return this.json.driverNamePrefix; }
        get driverNameSuffix() { return this.json.driverNameSuffix; }
        get endorsementsCode() { return this.json.endorsementsCode; }
        get eyeColor() { return this.json.eyeColor; }
        get firstNameTruncation() { return this.json.firstNameTruncation; }
        get hairColor() { return this.json.hairColor; }
        get heightCm() { return this.json.heightCm; }
        get heightInch() { return this.json.heightInch; }
        get iIN() { return this.json.iin; }
        get issuingJurisdiction() { return this.json.issuingJurisdiction; }
        get issuingJurisdictionIso() { return this.json.issuingJurisdictionIso; }
        get jurisdictionVersion() { return this.json.jurisdictionVersion; }
        get lastNameTruncation() { return this.json.lastNameTruncation; }
        get middleName() { return this.json.middleName; }
        get middleNameTruncation() { return this.json.middleNameTruncation; }
        get placeOfBirth() { return this.json.placeOfBirth; }
        get race() { return this.json.race; }
        get restrictionsCode() { return this.json.restrictionsCode; }
        get vehicleClass() { return this.json.vehicleClass; }
        get weightKg() { return this.json.weightKg; }
        get weightLbs() { return this.json.weightLbs; }
        get cardRevisionDate() {
            return DateResult.fromJSON(this.json.cardRevisionDate);
        }
        get documentDiscriminatorNumber() { return this.json.documentDiscriminatorNumber; }
        get barcodeDataElements() { return this.json.dictionary; }
        static fromJSON(json) {
            const result = new AAMVABarcodeResult();
            result.json = json;
            return result;
        }
    }
    class MRZResult {
        get documentCode() { return this.json.documentCode; }
        get namesAreTruncated() { return this.json.namesAreTruncated; }
        get optional() { return this.json.optional; }
        get optional1() { return this.json.optional1; }
        get capturedMrz() { return this.json.capturedMrz; }
        static fromJSON(json) {
            const result = new MRZResult();
            result.json = json;
            return result;
        }
    }
    class USUniformedServicesBarcodeResult {
        get bloodType() { return this.json.bloodType; }
        get branchOfService() { return this.json.branchOfService; }
        get champusEffectiveDate() {
            return DateResult.fromJSON(this.json.champusEffectiveDate);
        }
        get champusExpiryDate() {
            return DateResult.fromJSON(this.json.champusExpiryDate);
        }
        get civilianHealthCareFlagCode() { return this.json.civilianHealthCareFlagCode; }
        get civilianHealthCareFlagDescription() { return this.json.civilianHealthCareFlagDescription; }
        get commissaryFlagCode() { return this.json.commissaryFlagCode; }
        get commissaryFlagDescription() { return this.json.commissaryFlagDescription; }
        get deersDependentSuffixCode() { return this.json.deersDependentSuffixCode; }
        get deersDependentSuffixDescription() { return this.json.deersDependentSuffixDescription; }
        get directCareFlagCode() { return this.json.directCareFlagCode; }
        get directCareFlagDescription() { return this.json.directCareFlagDescription; }
        get exchangeFlagCode() { return this.json.exchangeFlagCode; }
        get exchangeFlagDescription() { return this.json.exchangeFlagDescription; }
        get eyeColor() { return this.json.eyeColor; }
        get familySequenceNumber() { return this.json.familySequenceNumber; }
        get formNumber() { return this.json.formNumber; }
        get genevaConventionCategory() { return this.json.genevaConventionCategory; }
        get hairColor() { return this.json.hairColor; }
        get height() { return this.json.height; }
        get jpegData() { return this.json.jpegData; }
        get mwrFlagCode() { return this.json.mwrFlagCode; }
        get mwrFlagDescription() { return this.json.mwrFlagDescription; }
        get payGrade() { return this.json.payGrade; }
        get personDesignatorDocument() { return this.json.personDesignatorDocument; }
        get rank() { return this.json.rank; }
        get relationshipCode() { return this.json.relationshipCode; }
        get relationshipDescription() { return this.json.relationshipDescription; }
        get securityCode() { return this.json.securityCode; }
        get serviceCode() { return this.json.serviceCode; }
        get sponsorFlag() { return this.json.sponsorFlag; }
        get sponsorName() { return this.json.sponsorName; }
        get sponsorPersonDesignatorIdentifier() {
            return this.json.sponsorPersonDesignatorIdentifier;
        }
        get statusCode() { return this.json.statusCode; }
        get statusCodeDescription() { return this.json.statusCodeDescription; }
        get version() { return this.json.version; }
        get weight() { return this.json.weight; }
        static fromJSON(json) {
            const result = new USUniformedServicesBarcodeResult();
            result.json = json;
            return result;
        }
    }
    class VIZResult {
        get additionalAddressInformation() { return this.json.additionalAddressInformation; }
        get additionalNameInformation() { return this.json.additionalNameInformation; }
        get documentAdditionalNumber() { return this.json.documentAdditionalNumber; }
        get employer() { return this.json.employer; }
        get issuingAuthority() { return this.json.issuingAuthority; }
        get issuingJurisdiction() { return this.json.issuingJurisdiction; }
        get issuingJurisdictionIso() { return this.json.issuingJurisdictionIso; }
        get maritalStatus() { return this.json.maritalStatus; }
        get personalIdNumber() { return this.json.personalIdNumber; }
        get placeOfBirth() { return this.json.placeOfBirth; }
        get profession() { return this.json.profession; }
        get race() { return this.json.race; }
        get religion() { return this.json.religion; }
        get residentialStatus() { return this.json.residentialStatus; }
        get capturedSides() { return this.json.capturedSides; }
        get isBackSideCaptureSupported() { return this.json.isBackSideCaptureSupported; }
        static fromJSON(json) {
            const result = new VIZResult();
            result.json = json;
            return result;
        }
    }
    class ArgentinaIdBarcodeResult {
        get personalIdNumber() { return this.json.personalIdNumber; }
        get documentCopy() { return this.json.documentCopy; }
        static fromJSON(json) {
            const result = new ArgentinaIdBarcodeResult();
            result.json = json;
            return result;
        }
    }
    class ColombiaIdBarcodeResult {
        get bloodType() { return this.json.bloodType; }
        static fromJSON(json) {
            const result = new ColombiaIdBarcodeResult();
            result.json = json;
            return result;
        }
    }
    class SouthAfricaIdBarcodeResult {
        get countryOfBirth() { return this.json.countryOfBirth; }
        get countryOfBirthIso() { return this.json.countryOfBirthIso; }
        get citizenshipStatus() { return this.json.citizenshipStatus; }
        get personalIdNumber() { return this.json.personalIdNumber; }
        static fromJSON(json) {
            const result = new SouthAfricaIdBarcodeResult();
            result.json = json;
            return result;
        }
    }
    class SouthAfricaDlBarcodeResult {
        get version() { return this.json.version; }
        get licenseCountryOfIssue() { return this.json.licenseCountryOfIssue; }
        get personalIdNumber() { return this.json.personalIdNumber; }
        get personalIdNumberType() { return this.json.personalIdNumberType; }
        get documentCopy() { return this.json.documentCopy; }
        get driverRestrictionCodes() { return this.json.driverRestrictionCodes; }
        get professionalDrivingPermit() {
            return ProfessionalDrivingPermit
                .fromJSON(this.json.professionalDrivingPermit);
        }
        get vehicleRestrictions() {
            return this.json.vehicleRestrictions.map(json => VehicleRestriction.fromJSON(json));
        }
        static fromJSON(json) {
            const result = new SouthAfricaDlBarcodeResult();
            result.json = json;
            return result;
        }
    }
    class LocalizedOnlyId {
        get location() {
            return this._location;
        }
        static fromJSON(json) {
            const result = new LocalizedOnlyId();
            result._location = Quadrilateral.fromJSON(json.location);
            return result;
        }
    }
    class RejectedId {
        get location() {
            return this._location;
        }
        static fromJSON(json) {
            const result = new RejectedId();
            result._location = Quadrilateral.fromJSON(json.location);
            return result;
        }
    }
    class StringComparisonCheck {
        get vizValue() { return this.json.vizValue; }
        get aamvaBarcodeValue() { return this.json.aamvaBarcodeValue; }
        get checkResult() { return this.json.checkResult; }
        get resultDescription() { return this.json.resultDescription; }
        static fromJSON(json) {
            const result = new StringComparisonCheck();
            result.json = json;
            return result;
        }
    }
    class DateComparisonCheck {
        get vizValue() {
            return DateResult.fromJSON(this.json.vizValue);
        }
        get aamvaBarcodeValue() {
            return DateResult.fromJSON(this.json.aamvaBarcodeValue);
        }
        get checkResult() { return this.json.checkResult; }
        get resultDescription() { return this.json.resultDescription; }
        static fromJSON(json) {
            const result = new DateComparisonCheck();
            result.json = json;
            return result;
        }
    }
    class AamvaVizBarcodeComparisonResult {
        get checksPassed() { return this.json.checksPassed; }
        get resultDescription() { return this.json.resultDescription; }
        get issuingCountryIsoMatch() {
            return StringComparisonCheck
                .fromJSON(this.json.issuingCountryIsoMatch);
        }
        get issuingJurisdictionIsoMatch() {
            return StringComparisonCheck
                .fromJSON(this.json.issuingJurisdictionIsoMatch);
        }
        get documentNumbersMatch() {
            return StringComparisonCheck
                .fromJSON(this.json.documentNumbersMatch);
        }
        get fullNamesMatch() {
            return StringComparisonCheck
                .fromJSON(this.json.fullNamesMatch);
        }
        get datesOfBirthMatch() {
            return DateComparisonCheck
                .fromJSON(this.json.datesOfBirth);
        }
        get datesOfExpiryMatch() {
            return DateComparisonCheck
                .fromJSON(this.json.datesOfExpiry);
        }
        get datesOfIssueMatch() {
            return DateComparisonCheck
                .fromJSON(this.json.datesOfIssue);
        }
        static fromJSON(json) {
            const result = new AamvaVizBarcodeComparisonResult();
            result.json = json;
            return result;
        }
    }
    class AamvaVizBarcodeComparisonVerifier {
        constructor() {
            this.proxy = new IdCaptureProxy();
        }
        static create() {
            return new AamvaVizBarcodeComparisonVerifier();
        }
        verify(capturedId) {
            return new Promise((resolve, reject) => {
                this.proxy
                    .verifyCapturedId(JSON.stringify(capturedId))
                    .then((result) => {
                    if (!result.data) {
                        resolve(AamvaVizBarcodeComparisonResult
                            .fromJSON(JSON.parse(('{}'))));
                    }
                    else {
                        resolve(AamvaVizBarcodeComparisonResult
                            .fromJSON(JSON.parse(result.data)));
                    }
                }, reject);
            });
        }
    }
    __decorate$3([
        ignoreFromSerialization
    ], AamvaVizBarcodeComparisonVerifier.prototype, "proxy", void 0);

    var CapturedResultType;
    (function (CapturedResultType) {
        CapturedResultType["AAMVABarcodeResult"] = "aamvaBarcodeResult";
        CapturedResultType["ArgentinaIdBarcodeResult"] = "argentinaIdBarcodeResult";
        CapturedResultType["ColombiaIdBarcodeResult"] = "colombiaIdBarcodeResult";
        CapturedResultType["MRZResult"] = "mrzResult";
        CapturedResultType["SouthAfricaDlBarcodeResult"] = "southAfricaDlBarcodeResult";
        CapturedResultType["SouthAfricaIdBarcodeResult"] = "southAfricaIdBarcodeResult";
        CapturedResultType["USUniformedServicesBarcodeResult"] = "usUniformedServicesBarcodeResult";
        CapturedResultType["VIZResult"] = "vizResult";
    })(CapturedResultType || (CapturedResultType = {}));
    var DocumentType;
    (function (DocumentType) {
        DocumentType["None"] = "none";
        DocumentType["ConsularId"] = "consularId";
        DocumentType["DrivingLicense"] = "drivingLicense";
        DocumentType["DrivingLicensePublicServicesCard"] = "drivingLicensePublicServicesCard";
        DocumentType["EmploymentPass"] = "employmentPass";
        DocumentType["FinCard"] = "finCard";
        DocumentType["Id"] = "id";
        DocumentType["MultipurposeId"] = "multipurposeId";
        DocumentType["MyKad"] = "myKad";
        DocumentType["MyKid"] = "myKid";
        DocumentType["MyPR"] = "myPr";
        DocumentType["MyTentera"] = "myTentera";
        DocumentType["PanCard"] = "panCard";
        DocumentType["ProfessionalId"] = "professionalId";
        DocumentType["PublicServicesCard"] = "publicServicesCard";
        DocumentType["ResidencePermit"] = "residencePermit";
        DocumentType["ResidentId"] = "residentId";
        DocumentType["TemporaryResidencePermit"] = "temporaryResidencePermit";
        DocumentType["VoterId"] = "voterId";
        DocumentType["WorkPermit"] = "workPermit";
        DocumentType["IKad"] = "iKad";
        DocumentType["MilitaryId"] = "militaryId";
        DocumentType["MyKas"] = "myKas";
        DocumentType["SocialSecurityCard"] = "socialSecurityCard";
        DocumentType["HealthInsuranceCard"] = "healthInsuranceCard";
        DocumentType["Passport"] = "passport";
        DocumentType["DiplomaticPassport"] = "diplomaticPassport";
        DocumentType["ServicePassport"] = "servicePassport";
        DocumentType["TemporaryPassport"] = "temporaryPassport";
        DocumentType["Visa"] = "visa";
        DocumentType["SPass"] = "sPass";
        DocumentType["AddressCard"] = "addressCard";
        DocumentType["AlienId"] = "alienId";
        DocumentType["AlienPassport"] = "alienPassport";
        DocumentType["GreenCard"] = "greenCard";
        DocumentType["MinorsId"] = "minorsId";
        DocumentType["PostalId"] = "postalId";
        DocumentType["ProfessionalDl"] = "professionalDl";
        DocumentType["TaxId"] = "taxId";
        DocumentType["WeaponPermit"] = "weaponPermit";
        DocumentType["BorderCrossingCard"] = "borderCrossingCard";
        DocumentType["DriverCard"] = "driverCard";
        DocumentType["GlobalEntryCard"] = "globalEntryCard";
        DocumentType["MyPolis"] = "myPolis";
        DocumentType["NexusCard"] = "nexusCard";
        DocumentType["PassportCard"] = "passportCard";
        DocumentType["ProofOfAgeCard"] = "proofOfAgeCard";
        DocumentType["RefugeeId"] = "refugeeId";
        DocumentType["TribalId"] = "tribalId";
        DocumentType["VeteranId"] = "veteranId";
        DocumentType["CitizenshipCertificate"] = "citizenshipCertificate";
        DocumentType["MyNumberCard"] = "myNumberCard";
    })(DocumentType || (DocumentType = {}));
    var IdDocumentType;
    (function (IdDocumentType) {
        IdDocumentType["AAMVABarcode"] = "aamvaBarcode";
        IdDocumentType["ArgentinaIdBarcode"] = "argentinaIdBarcode";
        IdDocumentType["ColombiaIdBarcode"] = "colombiaIdBarcode";
        IdDocumentType["DLVIZ"] = "dlViz";
        IdDocumentType["IdCardMRZ"] = "idCardMrz";
        IdDocumentType["IdCardVIZ"] = "idCardViz";
        IdDocumentType["PassportMRZ"] = "passportMrz";
        IdDocumentType["SouthAfricaDlBarcode"] = "southAfricaDlBarcode";
        IdDocumentType["SouthAfricaIdBarcode"] = "southAfricaIdBarcode";
        IdDocumentType["SwissDLMRZ"] = "swissDlMrz";
        IdDocumentType["USUSIdBarcode"] = "usUsIdBarcode";
        IdDocumentType["VisaMRZ"] = "visaMrz";
    })(IdDocumentType || (IdDocumentType = {}));
    var SupportedSides;
    (function (SupportedSides) {
        SupportedSides["FrontOnly"] = "frontOnly";
        SupportedSides["FrontAndBack"] = "frontAndBack";
    })(SupportedSides || (SupportedSides = {}));
    var IdImageType;
    (function (IdImageType) {
        IdImageType["Face"] = "face";
        IdImageType["IdFront"] = "idFront";
        IdImageType["IdBack"] = "idBack";
    })(IdImageType || (IdImageType = {}));
    var IdLayout;
    (function (IdLayout) {
        IdLayout["TD1"] = "td1";
        IdLayout["TD2"] = "td2";
        IdLayout["TD3"] = "td3";
        IdLayout["MRVa"] = "mrvA";
        IdLayout["VIZ"] = "viz";
        IdLayout["PDF417"] = "pdf417";
        IdLayout["Auto"] = "auto";
        IdLayout["None"] = "none";
    })(IdLayout || (IdLayout = {}));
    var IdLayoutStyle;
    (function (IdLayoutStyle) {
        IdLayoutStyle["Rounded"] = "rounded";
        IdLayoutStyle["Square"] = "square";
    })(IdLayoutStyle || (IdLayoutStyle = {}));
    var IdLayoutLineStyle;
    (function (IdLayoutLineStyle) {
        IdLayoutLineStyle["Light"] = "light";
        IdLayoutLineStyle["Bold"] = "bold";
    })(IdLayoutLineStyle || (IdLayoutLineStyle = {}));
    var ComparisonCheckResult;
    (function (ComparisonCheckResult) {
        ComparisonCheckResult["Passed"] = "passed";
        ComparisonCheckResult["Skipped"] = "skipped";
        ComparisonCheckResult["Failed"] = "failed";
    })(ComparisonCheckResult || (ComparisonCheckResult = {}));

    var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    class Brush extends DefaultSerializeable {
        static get transparent() {
            const transparentBlack = Color.fromRGBA(255, 255, 255, 0);
            return new Brush(transparentBlack, transparentBlack, 0);
        }
        get fillColor() {
            return this.fill.color;
        }
        get strokeColor() {
            return this.stroke.color;
        }
        get strokeWidth() {
            return this.stroke.width;
        }
        constructor(fillColor = Capacitor$1.defaults.Brush.fillColor, strokeColor = Capacitor$1.defaults.Brush.strokeColor, strokeWidth = Capacitor$1.defaults.Brush.strokeWidth) {
            super();
            this.fill = { color: fillColor };
            this.stroke = { color: strokeColor, width: strokeWidth };
        }
    }
    class LaserlineViewfinder extends DefaultSerializeable {
        constructor(style) {
            super();
            this.type = 'laserline';
            const viewfinderStyle = style || Capacitor$1.defaults.LaserlineViewfinder.defaultStyle;
            this._style = Capacitor$1.defaults.LaserlineViewfinder.styles[viewfinderStyle].style;
            this.width = Capacitor$1.defaults.LaserlineViewfinder.styles[viewfinderStyle].width;
            this.enabledColor = Capacitor$1.defaults.LaserlineViewfinder.styles[viewfinderStyle].enabledColor;
            this.disabledColor = Capacitor$1.defaults.LaserlineViewfinder.styles[viewfinderStyle].disabledColor;
        }
        get style() {
            return this._style;
        }
    }
    __decorate$2([
        nameForSerialization('style')
    ], LaserlineViewfinder.prototype, "_style", void 0);
    class RectangularViewfinder extends DefaultSerializeable {
        get sizeWithUnitAndAspect() {
            return this._sizeWithUnitAndAspect;
        }
        constructor(style, lineStyle) {
            super();
            this.type = 'rectangular';
            const viewfinderStyle = style || Capacitor$1.defaults.RectangularViewfinder.defaultStyle;
            this._style = Capacitor$1.defaults.RectangularViewfinder.styles[viewfinderStyle].style;
            this._lineStyle = Capacitor$1.defaults.RectangularViewfinder.styles[viewfinderStyle].lineStyle;
            this._dimming = parseFloat(Capacitor$1.defaults.RectangularViewfinder.styles[viewfinderStyle].dimming);
            this._disabledDimming =
                parseFloat(Capacitor$1.defaults.RectangularViewfinder.styles[viewfinderStyle].disabledDimming);
            this._animation = Capacitor$1.defaults.RectangularViewfinder.styles[viewfinderStyle].animation;
            this.color = Capacitor$1.defaults.RectangularViewfinder.styles[viewfinderStyle].color;
            this._sizeWithUnitAndAspect = Capacitor$1.defaults.RectangularViewfinder.styles[viewfinderStyle].size;
            if (lineStyle !== undefined) {
                this._lineStyle = lineStyle;
            }
        }
        get style() {
            return this._style;
        }
        get lineStyle() {
            return this._lineStyle;
        }
        get dimming() {
            return this._dimming;
        }
        set dimming(value) {
            this._dimming = value;
        }
        get disabledDimming() {
            return this._disabledDimming;
        }
        set disabledDimming(value) {
            this._disabledDimming = value;
        }
        get animation() {
            return this._animation;
        }
        set animation(animation) {
            this._animation = animation;
        }
        setSize(size) {
            this._sizeWithUnitAndAspect = SizeWithUnitAndAspect.sizeWithWidthAndHeight(size);
        }
        setWidthAndAspectRatio(width, heightToWidthAspectRatio) {
            this._sizeWithUnitAndAspect = SizeWithUnitAndAspect.sizeWithWidthAndAspectRatio(width, heightToWidthAspectRatio);
        }
        setHeightAndAspectRatio(height, widthToHeightAspectRatio) {
            this._sizeWithUnitAndAspect = SizeWithUnitAndAspect.sizeWithHeightAndAspectRatio(height, widthToHeightAspectRatio);
        }
        setShorterDimensionAndAspectRatio(fraction, aspectRatio) {
            this._sizeWithUnitAndAspect = SizeWithUnitAndAspect.sizeWithShorterDimensionAndAspectRatio(new NumberWithUnit(fraction, MeasureUnit.Fraction), aspectRatio);
        }
    }
    __decorate$2([
        nameForSerialization('style')
    ], RectangularViewfinder.prototype, "_style", void 0);
    __decorate$2([
        nameForSerialization('lineStyle')
    ], RectangularViewfinder.prototype, "_lineStyle", void 0);
    __decorate$2([
        nameForSerialization('dimming')
    ], RectangularViewfinder.prototype, "_dimming", void 0);
    __decorate$2([
        nameForSerialization('disabledDimming')
    ], RectangularViewfinder.prototype, "_disabledDimming", void 0);
    __decorate$2([
        nameForSerialization('animation'),
        ignoreFromSerialization
    ], RectangularViewfinder.prototype, "_animation", void 0);
    __decorate$2([
        nameForSerialization('size')
    ], RectangularViewfinder.prototype, "_sizeWithUnitAndAspect", void 0);

    var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    class IdCaptureError {
        get type() {
            return this._type;
        }
        get message() {
            return this._message;
        }
        static fromJSON(json) {
            const error = new IdCaptureError();
            error._type = json.type;
            error._message = json.message;
            return error;
        }
    }
    class IdCaptureSession {
        get newlyCapturedId() {
            return this._newlyCapturedId;
        }
        get frameSequenceId() {
            return this._frameSequenceId;
        }
        get localizedOnlyId() {
            return this._localizedOnlyId;
        }
        get newlyRejectedId() {
            return this._newlyRejectedId;
        }
        static fromJSON(json) {
            const session = new IdCaptureSession();
            if (json.newlyCapturedId) {
                session._newlyCapturedId = CapturedId.fromJSON(json.newlyCapturedId);
            }
            if (json.localizedOnlyId) {
                session._localizedOnlyId = LocalizedOnlyId.fromJSON(json.localizedOnlyId);
            }
            if (json.newlyRejectedId) {
                session._newlyRejectedId = LocalizedOnlyId.fromJSON(json.newlyRejectedId);
            }
            session._frameSequenceId = json.frameSequenceId;
            session._error = json.error ? IdCaptureError.fromJSON(json.error) : null;
            return session;
        }
    }
    class IdCaptureOverlay extends DefaultSerializeable {
        static withIdCapture(idCapture) {
            return IdCaptureOverlay.withIdCaptureForView(idCapture, null);
        }
        static withIdCaptureForView(idCapture, view) {
            const overlay = new IdCaptureOverlay();
            overlay.idCapture = idCapture;
            if (view) {
                view.addOverlay(overlay);
            }
            return overlay;
        }
        constructor() {
            super();
            this.type = 'idCapture';
            this._idLayout = IdLayout.Auto;
            this._idLayoutStyle = IdLayoutStyle.Rounded;
            this._defaultCapturedBrush = new Brush(Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.fillColor, Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.strokeColor, Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.strokeWidth);
            this._defaultLocalizedBrush = new Brush(Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.fillColor, Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.strokeColor, Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.strokeWidth);
            this._defaultRejectedBrush = new Brush(Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.fillColor, Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.strokeColor, Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.strokeWidth);
            this._capturedBrush = this._defaultCapturedBrush;
            this._localizedBrush = this._defaultLocalizedBrush;
            this._rejectedBrush = this._defaultRejectedBrush;
            this._idLayoutLineStyle = IdLayoutLineStyle.Light;
        }
        setIdLayout(idLayout) {
            this._idLayout = idLayout;
            this.idCapture.didChange();
        }
        get idLayoutStyle() {
            return this._idLayoutStyle;
        }
        set idLayoutStyle(style) {
            this._idLayoutStyle = style;
            this.idCapture.didChange();
        }
        get idLayoutLineStyle() {
            return this._idLayoutLineStyle;
        }
        set idLayoutLineStyle(lineStyle) {
            this._idLayoutLineStyle = lineStyle;
            this.idCapture.didChange();
        }
        get capturedBrush() {
            return this._capturedBrush;
        }
        set capturedBrush(brush) {
            this._capturedBrush = brush;
            this.idCapture.didChange();
        }
        get localizedBrush() {
            return this._localizedBrush;
        }
        set localizedBrush(brush) {
            this._localizedBrush = brush;
            this.idCapture.didChange();
        }
        get rejectedBrush() {
            return this._rejectedBrush;
        }
        set rejectedBrush(brush) {
            this._rejectedBrush = brush;
            this.idCapture.didChange();
        }
        get defaultCapturedBrush() {
            return this._defaultCapturedBrush;
        }
        get defaultLocalizedBrush() {
            return this._defaultLocalizedBrush;
        }
        get defaultRejectedBrush() {
            return this._defaultRejectedBrush;
        }
    }
    __decorate$1([
        ignoreFromSerialization
    ], IdCaptureOverlay.prototype, "idCapture", void 0);
    __decorate$1([
        nameForSerialization('idLayout')
    ], IdCaptureOverlay.prototype, "_idLayout", void 0);
    __decorate$1([
        nameForSerialization('idLayoutStyle')
    ], IdCaptureOverlay.prototype, "_idLayoutStyle", void 0);
    __decorate$1([
        nameForSerialization('capturedBrush')
    ], IdCaptureOverlay.prototype, "_capturedBrush", void 0);
    __decorate$1([
        nameForSerialization('localizedBrush')
    ], IdCaptureOverlay.prototype, "_localizedBrush", void 0);
    __decorate$1([
        nameForSerialization('rejectedBrush')
    ], IdCaptureOverlay.prototype, "_rejectedBrush", void 0);
    __decorate$1([
        nameForSerialization('idLayoutLineStyle')
    ], IdCaptureOverlay.prototype, "_idLayoutLineStyle", void 0);

    var IdCaptureListenerEvent;
    (function (IdCaptureListenerEvent) {
        IdCaptureListenerEvent["DidCapture"] = "IdCaptureListener.didCaptureId";
        IdCaptureListenerEvent["DidLocalize"] = "IdCaptureListener.didLocalizeId";
        IdCaptureListenerEvent["DidReject"] = "IdCaptureListener.didRejectId";
    })(IdCaptureListenerEvent || (IdCaptureListenerEvent = {}));
    class IdCaptureListenerProxy {
        static forIdCapture(idCapture) {
            const proxy = new IdCaptureListenerProxy();
            proxy.idCapture = idCapture;
            proxy.initialize();
            return proxy;
        }
        initialize() {
            this.subscribeListener();
        }
        subscribeListener() {
            window.Capacitor.Plugins[Capacitor.pluginName][CapacitorFunction.SubscribeIdCaptureListener]();
            window.Capacitor.Plugins[Capacitor.pluginName]
                .addListener(IdCaptureListenerEvent.DidCapture, this.notifyListeners.bind(this));
            window.Capacitor.Plugins[Capacitor.pluginName]
                .addListener(IdCaptureListenerEvent.DidLocalize, this.notifyListeners.bind(this));
            window.Capacitor.Plugins[Capacitor.pluginName]
                .addListener(IdCaptureListenerEvent.DidReject, this.notifyListeners.bind(this));
        }
        notifyListeners(event) {
            const done = () => {
                this.idCapture.isInListenerCallback = false;
                window.Capacitor.Plugins[Capacitor.pluginName].finishCallback({
                    result: {
                        enabled: this.idCapture.isEnabled,
                        finishCallbackID: event.name,
                    },
                });
                return { enabled: this.idCapture.isEnabled };
            };
            this.idCapture.isInListenerCallback = true;
            if (!event) {
                // The event could be undefined/null in case the plugin result did not pass a "message",
                // which could happen e.g. in case of "ok" results, which could signal e.g. successful
                // listener subscriptions.
                return done();
            }
            this.idCapture.listeners.forEach((listener) => {
                switch (event.name) {
                    case IdCaptureListenerEvent.DidCapture:
                        if (listener.didCaptureId) {
                            listener.didCaptureId(this.idCapture, IdCaptureSession
                                .fromJSON(JSON.parse(event.session)));
                        }
                        break;
                    case IdCaptureListenerEvent.DidLocalize:
                        if (listener.didLocalizeId) {
                            listener.didLocalizeId(this.idCapture, IdCaptureSession
                                .fromJSON(JSON.parse(event.session)));
                        }
                        break;
                    case IdCaptureListenerEvent.DidReject:
                        if (listener.didRejectId) {
                            listener.didRejectId(this.idCapture, IdCaptureSession
                                .fromJSON(JSON.parse(event.session)));
                        }
                        break;
                }
            });
            return done();
        }
    }
    IdCaptureListenerProxy.cordovaExec = Capacitor.exec;

    var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    class IdCapture extends DefaultSerializeable {
        constructor() {
            super(...arguments);
            this.type = 'idCapture';
            this._isEnabled = true;
            this._context = null;
            this.listeners = [];
            this.listenerProxy = null;
            this.isInListenerCallback = false;
        }
        get isEnabled() {
            return this._isEnabled;
        }
        set isEnabled(isEnabled) {
            this._isEnabled = isEnabled;
            if (!this.isInListenerCallback) {
                // If we're "in" a listener callback, we don't want to deserialize the context to update the enabled state,
                // but rather pass that back to be applied in the native callback.
                this.didChange();
            }
        }
        get context() {
            return this._context;
        }
        static get recommendedCameraSettings() {
            return new CameraSettings(Capacitor.defaults.IdCapture.RecommendedCameraSettings);
        }
        static forContext(context, settings) {
            const mode = new IdCapture();
            mode.settings = settings;
            if (context) {
                context.addMode(mode);
            }
            mode.listenerProxy = IdCaptureListenerProxy.forIdCapture(mode);
            mode.proxy = IdCaptureProxy.forIdCapture(mode);
            return mode;
        }
        addListener(listener) {
            if (this.listeners.includes(listener)) {
                return;
            }
            this.listeners.push(listener);
        }
        removeListener(listener) {
            if (!this.listeners.includes(listener)) {
                return;
            }
            this.listeners.splice(this.listeners.indexOf(listener), 1);
        }
        reset() {
            return this.proxy.reset();
        }
        didChange() {
            if (this.context) {
                return this.context.update();
            }
            else {
                return Promise.resolve();
            }
        }
    }
    __decorate([
        nameForSerialization('enabled')
    ], IdCapture.prototype, "_isEnabled", void 0);
    __decorate([
        ignoreFromSerialization
    ], IdCapture.prototype, "_context", void 0);
    __decorate([
        ignoreFromSerialization
    ], IdCapture.prototype, "listeners", void 0);
    __decorate([
        ignoreFromSerialization
    ], IdCapture.prototype, "listenerProxy", void 0);
    __decorate([
        ignoreFromSerialization
    ], IdCapture.prototype, "proxy", void 0);
    __decorate([
        ignoreFromSerialization
    ], IdCapture.prototype, "isInListenerCallback", void 0);

    class IdCaptureSettings extends DefaultSerializeable {
        constructor() {
            super();
            this.properties = {};
            this.imageToResult = {};
            this.supportedDocuments = [];
            this.supportedSides = SupportedSides.FrontOnly;
        }
        setProperty(name, value) {
            this.properties[name] = value;
        }
        getProperty(name) {
            return this.properties[name];
        }
        setShouldPassImageTypeToResult(type, shouldPass) {
            this.imageToResult[type] = shouldPass;
        }
        getShouldPassImageTypeToResult(type) {
            return this.imageToResult[type] || false;
        }
    }

    class ScanditIdPluginImplementation {
        async initialize(coreDefaults) {
            const api = {
                IdCapture,
                IdCaptureOverlay,
                IdCaptureSession,
                IdCaptureSettings,
                CapturedResultType,
                DocumentType,
                IdImageType,
                IdDocumentType,
                SupportedSides,
                IdLayoutStyle,
                IdLayoutLineStyle,
                IdLayout,
                ComparisonCheckResult,
                AAMVABarcodeResult,
                AamvaVizBarcodeComparisonResult,
                AamvaVizBarcodeComparisonVerifier,
                CapturedId,
                RejectedId,
                LocalizedOnlyId,
                DateResult,
                MRZResult,
                USUniformedServicesBarcodeResult,
                VIZResult,
                ArgentinaIdBarcodeResult,
                ColombiaIdBarcodeResult,
                SouthAfricaDlBarcodeResult,
                SouthAfricaIdBarcodeResult,
            };
            Capacitor$1.defaults = coreDefaults;
            const idDefaults = await getDefaults();
            Capacitor.defaults = idDefaults;
            return api;
        }
    }
    core.registerPlugin('ScanditIdPlugin', {
        android: () => new ScanditIdPluginImplementation(),
        ios: () => new ScanditIdPluginImplementation(),
        web: () => new ScanditIdPluginImplementation(),
    });
    // tslint:disable-next-line:variable-name
    const ScanditIdPlugin = new ScanditIdPluginImplementation();

    exports.ScanditIdPlugin = ScanditIdPlugin;
    exports.ScanditIdPluginImplementation = ScanditIdPluginImplementation;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, require('@capacitor/core'));
//# sourceMappingURL=plugin.js.map
