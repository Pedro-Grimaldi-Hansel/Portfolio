"use strict";
exports.__esModule = true;
var index_module_scss_1 = require("@/src/styles/scss/index.module.scss");
var image_1 = require("next/image");
var FotoPedro_jpeg_1 = require("@/src/public/images/FotoPedro.jpeg");
var NavBarMobile_1 = require("@/src/components/NavBarMobile");
var NavBar_1 = require("@/src/components/NavBar");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: index_module_scss_1["default"].navbar },
            React.createElement(NavBar_1["default"], null)),
        React.createElement("section", { className: index_module_scss_1["default"].navbarMobile },
            React.createElement(NavBarMobile_1["default"], null)),
        React.createElement("main", { className: index_module_scss_1["default"].Home },
            React.createElement("header", { className: index_module_scss_1["default"].Home_top },
                React.createElement("div", { className: index_module_scss_1["default"].foto_de_perfil },
                    React.createElement("a", { href: "https://github.com/Pedro-Grimaldi-Hansel", target: "_blank", rel: "noreferrer" },
                        React.createElement(image_1["default"], { alt: 'Foto de perfil', src: FotoPedro_jpeg_1["default"] })))),
            React.createElement("section", { className: index_module_scss_1["default"].Home_text },
                React.createElement("h1", null, "<>Pedro Grimaldi Hansel</>"),
                React.createElement("p", null,
                    " Sou estudante de gradua\u00E7\u00E3o em Ci\u00EAncias Exatas e Ci\u00EAncias da Computa\u00E7\u00E3o (UFJF), ja atuei como desenvolvedor e gerente de projetos na ",
                    React.createElement("a", { href: "https://www.instagram.com/codejr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", target: "_blank" }, "Code jr."),
                    " e como est\u00E1giario em engenharia de software na ",
                    React.createElement("a", { href: "https://levty.com/br/", target: "_blank" }, "LEVTY"),
                    ".")),
            React.createElement("section", { className: index_module_scss_1["default"].GitHubStats },
                React.createElement("a", { href: "https://github.com/Pedro-Grimaldi-Hansel", target: "_blank", rel: "noreferrer" },
                    React.createElement("img", { src: "https://github-readme-stats.vercel.app/api/top-langs/?username=Pedro-Grimaldi-Hansel&count_private=true&layout=compact&bg_color=0E1116&text_color=ffffff&title_color=ffffff&border_radius=25" }))))));
}
exports["default"] = Home;
