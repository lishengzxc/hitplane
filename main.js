cc.game.onStart = function () {
    cc.view.setDesignResolutionSize(640, 960, cc.ResolutionPolicy.FIXED_WIDTH);
    cc.view.resizeWithBrowserSize(true);
    cc._loaderImage = res.loading_jpg;
    //load resources
    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new HomeScene());
    }, this);
};

cc.game.run();