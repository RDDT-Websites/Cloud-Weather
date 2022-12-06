import tornado.web
import tornado.ioloop
from webassets import Environment


class MainHandler(tornado.web.RequestHandler):
    def initialize(self, assets):
        self.assets = assets

    def get(self):
        self.render("pages/index.html", assets=assets)


# Set up the webassets environment and make a bundle
assets = Environment( url="/static")
js_files = ["index.js"]
assets.register("bundle", *js_files,
                output="bundled.min.js",
                filters="rjsmin")  # webassets ships with this filter included

app = tornado.web.Application(
    [(r'/', MainHandler, dict(assets=assets))],
    static_path=".",
    template_path=".",
    debug=True)


tornado.ioloop.IOLoop.current().start()