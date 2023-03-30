import React, { useRef, useState, useCallback } from "react";
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    addBasePlugins,
    mobileAndTabletCheck,
} from "webgi";

const WebgiViewer = () => {
    const canvasRef = useRef(null);

    return (
        <section id="webgi-canvas-container" className="">
            <canvas id="webgi-canvas" ref={canvasRef}></canvas>
        </section>
    );
};

export default WebgiViewer;
