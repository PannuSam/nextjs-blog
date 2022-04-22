exports.id = 880;
exports.ids = [880];
exports.modules = {

/***/ 4308:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "layout_container__fbLkO",
	"header": "layout_header__kY0Lt",
	"backToHome": "layout_backToHome__9sjx_",
	"navbar": "layout_navbar__q6MUt",
	"logo": "layout_logo__GTPGC",
	"navmenu": "layout_navmenu__4WYsr",
	"menuitem": "layout_menuitem__mOyHZ",
	"names": "layout_names__MbcAP",
	"travel": "layout_travel__13l1q",
	"footercontainer": "layout_footercontainer__18CoA",
	"icons": "layout_icons__iKMrK",
	"card": "layout_card__HzAW_",
	"topCanada": "layout_topCanada__f6k13",
	"topIndia": "layout_topIndia__f2kod",
	"topChile": "layout_topChile__7cu5M",
	"name": "layout_name__WkJlQ",
	"info": "layout_info__CN8F4",
	"bottom": "layout_bottom__nlm7c"
};


/***/ }),

/***/ 2598:
/***/ ((module) => {

// Exports
module.exports = {
	"heading2Xl": "utils_heading2Xl___9fFP",
	"headingXl": "utils_headingXl__u25Y2",
	"headingLg": "utils_headingLg__5535D",
	"headingMd": "utils_headingMd__gD1Ok",
	"borderCircle": "utils_borderCircle__s2nTm",
	"colorInherit": "utils_colorInherit__mSH_x",
	"padding1px": "utils_padding1px__PWQKR",
	"list": "utils_list__4Mu4l",
	"listItem": "utils_listItem__s2m6i",
	"lightText": "utils_lightText__eUzGY"
};


/***/ }),

/***/ 723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4308);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().footercontainer),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().footer),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "\xa92022 Sam's World"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Facebook | Instagram | Twitter"
                })
            ]
        })
    });
};


/***/ }),

/***/ 3931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout),
  "y": () => (/* binding */ siteTitle)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/layout.module.css
var layout_module = __webpack_require__(4308);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
// EXTERNAL MODULE: ./styles/utils.module.css
var utils_module = __webpack_require__(2598);
var utils_module_default = /*#__PURE__*/__webpack_require__.n(utils_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Nav.js



function Nav() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: (layout_module_default()).navbar,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (layout_module_default()).logo,
                children: "Sam's World"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: (layout_module_default()).navmenu,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (layout_module_default()).menuitem,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Home"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (layout_module_default()).menuitem,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blog",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Blog"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (layout_module_default()).menuitem,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/about",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "About"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Layout.js







const Layout_name = "Saman Pannu";
const contact = " The Wanderer";
const siteTitle = "Sam's Adventurous World";
function Layout({ children , home  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (layout_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: " personal website with Next.js"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: `https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "og:title",
                        content: siteTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Nav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: (layout_module_default()).header,
                children: home ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                priority: true,
                                src: "/images/profile.jpg",
                                className: (utils_module_default()).borderCircle,
                                height: 170,
                                width: 170,
                                alt: Layout_name
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (layout_module_default()).names,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: (utils_module_default()).headingXl,
                                    children: Layout_name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: (utils_module_default()).headingMd,
                                    children: contact
                                })
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/blog",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    priority: true,
                                    src: "/images/profile.jpg",
                                    className: (utils_module_default()).borderCircle,
                                    height: 120,
                                    width: 120,
                                    alt: Layout_name
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (layout_module_default()).names,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: (utils_module_default()).headingLg,
                                    children: Layout_name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: (utils_module_default()).headingMd,
                                    children: contact
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            !home && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (layout_module_default()).backToHome,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/blog",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "\u2190 Go Back"
                    })
                })
            })
        ]
    });
};


/***/ })

};
;