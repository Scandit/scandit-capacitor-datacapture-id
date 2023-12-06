/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import Foundation

@objc public class ScanditIdCapture: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
