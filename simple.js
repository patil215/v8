// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --no-fast-math --allow-natives-syntax

import { unwrap, isKeyword } from '@sweet-js/helpers' for syntax;

syntax assertEquals = function (ctx) {
    let paramCtx = ctx.contextify(ctx.next().value);

    for (let stx of paramCtx) {
        let test = paramCtx.expand('expr').value;
        paramCtx.next();
        let r = paramCtx.expand('expr').value;
        return #`assertEqualsF(() => ${test}, () => ${r})`;
    }
};

assertEquals(-0, Math.expm1(-0));
