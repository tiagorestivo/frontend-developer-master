! function() {
    for (var e, t = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], a = t.length, o = window.console = window.console || {}; a--;) o[e = t[a]] || (o[e] = function() {})
}(), window.JSON || (window.JSON = {
    parse: function(sJSON) {
        return eval("(" + sJSON + ")")
    },
    stringify: function() {
        var e = Object.prototype.toString,
            t = Object.prototype.hasOwnProperty,
            a = Array.isArray || function(t) {
                return "[object Array]" === e.call(t)
            },
            o = {
                '"': '\\"',
                "\\": "\\\\",
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t"
            },
            n = function(e) {
                return o[e] || "\\u" + (e.charCodeAt(0) + 65536).toString(16).substr(1)
            },
            s = /[\\"\u0000-\u001F\u2028\u2029]/g;
        return function o(i) {
            if (null == i) return "null";
            if ("number" == typeof i) return isFinite(i) ? i.toString() : "null";
            if ("boolean" == typeof i) return i.toString();
            if ("object" == typeof i) {
                if ("function" == typeof i.toJSON) return o(i.toJSON());
                if (a(i)) {
                    for (var r = "[", l = 0; l < i.length; l++) r += (l ? ", " : "") + o(i[l]);
                    return r + "]"
                }
                if ("[object Object]" === e.call(i)) {
                    var c = [];
                    for (var d in i) t.call(i, d) && c.push(o(d) + ": " + o(i[d]));
                    return "{" + c.join(", ") + "}"
                }
            }
            return '"' + i.toString().replace(s, n) + '"'
        }
    }()
}), Object.keys || (Object.keys = function() {
    "use strict";
    var e = Object.prototype.hasOwnProperty,
        t = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        a = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        o = a.length;
    return function(n) {
        if ("function" != typeof n && ("object" != typeof n || null === n)) throw new TypeError("Object.keys called on non-object");
        var s, i, r = [];
        for (s in n) e.call(n, s) && r.push(s);
        if (t)
            for (i = 0; i < o; i++) e.call(n, a[i]) && r.push(a[i]);
        return r
    }
}());
var Sg_Utils = {
    forEach: function(e, t) {
        for (var a = 0, o = e.length; a < o; a++) t(e[a], a)
    },
    forEachElement: function(e, t) {
        var a = document.querySelectorAll(e);
        a && this.forEach(a, t)
    },
    addListener: function(e, t, a, o) {
        var n = !1;
        if (!0 === o) try {
            var s = Object.defineProperty({}, "passive", {
                get: function() {
                    n = !0
                }
            });
            window.addEventListener("test", null, s)
        } catch (e) {}
        e.addEventListener ? e.addEventListener(t, a, !(!n || !o) && {
            passive: !0
        }) : e.attachEvent ? e.attachEvent("on" + t, function() {
            return a.call(e, window.event)
        }) : e["on" + t] = a
    },
    extend: function(e, t) {
        var a = {};
        for (var o in e) a[o] = e[o];
        for (var o in t) t[o] && t[o].constructor && t[o].constructor === Object ? a[o] = this.extend(e[o] || {}, t[o]) : a[o] = t[o];
        return a
    },
    hasClass: function(e, t) {
        return new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className)
    },
    addClass: function(e, t) {
        e.classList ? e.classList.add(t) : e.className += " " + t
    },
    toggleClass: function(e, t) {
        this.hasClass(e, t) ? this.removeClass(e, t) : this.addClass(e, t)
    },
    removeClass: function(e, t) {
        e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
    },
    userAgentIsMobile: function() {
        var e = navigator.userAgent || navigator.vendor || window.opera;
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
    },
    request: function(e, t, a, o) {
        var n, s = !1;
        "function" != typeof o && (o = function() {}), t = t.toUpperCase(), n = new XMLHttpRequest;
        var i = "";
        for (var r in a) "" != i && (i += "&"), i += r + "=" + encodeURIComponent(a[r]);
        try {
            "GET" == t ? (i.length > 0 && (i = "?" + i), n.open(t, e + i, !0), i = "") : (n.open(t, e, !0), n.setRequestHeader("Method", "POST " + e + " HTTP/1.1"), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")), n.onreadystatechange = function() {
                if (4 == n.readyState && !s) {
                    s = !0;
                    var e = n.responseText;
                    try {
                        if ("{" === e.charAt(0) || "[" === e.charAt(0)) return o(JSON.parse(n.responseText)), !0
                    } catch (e) {}
                    o(n.responseText)
                }
            }, n.send(i)
        } catch (n) {
            console.error(n), console.warn("Failed to use XMLHttpRequest, trying to use jQuery instead.");
            var l = document.createElement("script");
            l.type = "text/javascript", l.src = "https://code.jquery.com/jquery-1.12.0.min.js", l.onreadystatechange = function() {
                "loaded" != l.readyState && "complete" != l.readyState || (l.onreadystatechange = null, console.log("jQuery is now loaded, trying request again"), $.ajax({
                    url: e,
                    method: t,
                    data: a,
                    dataType: "jsonp"
                }).done(function(e) {
                    o(e)
                }).fail(function() {
                    console.error("The request response failed.")
                }).always(function() {
                    s = !0
                }))
            };
            var c = document.getElementsByTagName("script")[0];
            return c.parentNode.insertBefore(l, c), !1
        }
        return !0
    },
    setCookie: function(e, t, a) {
        var o = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        a && a instanceof Date && (a = {
            expires: a
        }), a && "object" == typeof a && (a.expires && (o += "; expires=" + a.expires.toGMTString()), a.path && (o += "; path=" + a.path.toString()), a.domain && (o += "; domain=" + a.domain.toString()), a.secure && (o += "; secure")), document.cookie = o
    },
    getCookie: function(e) {
        for (var t = document.cookie.split(";"), a = 0; a < t.length; a++) {
            var o = t[a].split("="),
                n = decodeURIComponent(o[0].trim()),
                s = o.length > 1 ? o[1] : "";
            if (n == e) return decodeURIComponent(s)
        }
        return !1
    },
    createElement: function() {
        return "function" != typeof document.createElement ? document.createElement(arguments[0]) : "svg" === document.documentElement.nodeName.toLowerCase() ? document.createElementNS.call(document, "http://www.w3.org/2000/svg", arguments[0]) : document.createElement.apply(document, arguments)
    },
    supportCanvas: function() {
        var e = this.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    },
    supportCanvastext: function() {
        return !1 !== this.supportCanvas && "function" == typeof this.createElement("canvas").getContext("2d").fillText
    },
    supportLocalstorage: function() {
        var e = "sg_utils";
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0
        } catch (e) {
            return !1
        }
    },
    getScript: function(e, t) {
        "/" === e.charAt(0) && "/" === e.charAt(1) && (e = document.location.protocol + e);
        var a = window.document.getElementsByTagName("script")[0],
            o = window.document.createElement("script");
        return o.src = e, o.async = !0, a.parentNode.insertBefore(o, a), t && "function" == typeof t && (o.onload = t), o
    },
    parents: function(e, t) {
        for (var a = [], o = void 0 !== t; null !== (e = e.parentElement);) e.nodeType === Node.ELEMENT_NODE && (o && !e.matches(t) || a.push(e));
        return a
    },
    debounce: function(e, t, a) {
        var o;
        return function() {
            var n = this,
                s = arguments,
                i = a && !o;
            clearTimeout(o), o = setTimeout(function() {
                o = null, a || e.apply(n, s)
            }, t), i && e.apply(n, s)
        }
    },
    getOffset: function(e) {
        for (var t = 0, a = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - e.scrollLeft, a += e.offsetTop - e.scrollTop, e = e.offsetParent;
        return {
            top: a,
            left: t
        }
    },
    getWindowScrollCoordinates: function() {
        var e = 0,
            t = 0;
        if (isNaN(window.pageYOffset)) {
            var a = document,
                o = a.documentElement,
                n = a.body;
            e = o.scrollLeft || n.scrollLeft || 0, t = o.scrollTop || n.scrollTop || 0
        } else e = window.pageXOffset, t = window.pageYOffset;
        return {
            top: t,
            left: e
        }
    },
    urlAddParam: function(e, t, a) {
        var o = {},
            n = document.createElement("a");
        n.href = e;
        for (var s = n.search.split(/[?&]/), i = 0; i < s.length; i++)
            if (s[i]) {
                var r = s[i].split("=");
                o[r[0]] = r[1]
            }
        o[t] = a;
        var l = [];
        return Object.keys(o).forEach(function(e) {
            l.push(e + "=" + o[e])
        }), n.search = "?" + l.join("&"), n.href
    }
};
window.Sg_Utils = Sg_Utils;
var Sg_Social = Sg_Social || {};
Sg_Social = function() {
    "use strict";
    return {
        recaptchaLoaded: !1,
        recaptchasToLoad: [],
        options: {
            sg_share_baseurl: window.location.origin,
            sg_redirect_uri: window.location.href,
            recaptcha_public_key: "",
            fb_app_id: "",
            twitter_username: "",
            lang: "br",
            share_email_endpoint: "/share_email/",
            user_ios: /iP(ad|hone|od)/.test(navigator.userAgent) && !window.MSStream,
            campaign: {
                enabled: !0
            },
            events: {
                enabled: !0
            }
        },
        blocks: [],
        init: function(e) {
            window.recaptchaloaded = function() {
                Sg_Social.recaptchaloaded()
            }, this.initOptions(e), this.fetchAllBlocks(), this.fetchAllButtonsFromBlocks()
        },
        initRecaptcha: function() {
            if ("undefined" == typeof grecaptcha) {
                var e = document.createElement("script");
                e.src = "https://www.google.com/recaptcha/api.js?onload=recaptchaloaded&render=explicit", e.async = e.defer = !0, document.body.appendChild(e)
            } else this.recaptchaloaded()
        },
        recaptchaloaded: function() {
            this.recaptchaLoaded = !0;
            for (var e = 0; e < this.recaptchasToLoad.length; e++) this.initEmailBoxRecaptcha.apply(this, this.recaptchasToLoad[e])
        },
        initOptions: function(e) {
            this.options = Sg_Utils.extend(this.options, e), !this.options.events.enabled || "ga" in window || (console.warn("GA undefined and it will be disabled in Sg_Social"), this.options.events.enabled = !1)
        },
        initEmailBoxRecaptcha: function(e, t) {
            if ("undefined" != typeof grecaptcha) {
                var a = grecaptcha.render(e.querySelector(".sg-social-emailbox-recaptcha"), {
                    sitekey: this.options.recaptcha_public_key
                });
                t.recaptchaId = a
            }
        },
        initButtons: function(e, t) {
            var a = this;
            for (var o in e) {
                var n = e[o];
                if (Sg_Utils.hasClass(n, "sg-facebook-btn")) n.sg_type = "facebook";
                else if (Sg_Utils.hasClass(n, "sg-twitter-btn")) n.sg_type = "twitter";
                else if (Sg_Utils.hasClass(n, "sg-email-btn")) n.sg_type = "email";
                else if (Sg_Utils.hasClass(n, "sg-whatsapp-btn")) n.sg_type = "whatsapp";
                else if (Sg_Utils.hasClass(n, "sg-print-btn")) n.sg_type = "print";
                else if (Sg_Utils.hasClass(n, "sg-linkedin-btn")) n.sg_type = "linkedin";
                else if (Sg_Utils.hasClass(n, "sg-sms-btn")) n.sg_type = "sms";
                else if (Sg_Utils.hasClass(n, "sg-pinterest-btn")) n.sg_type = "pinterest";
                else {
                    if (!Sg_Utils.hasClass(n, "sg-fbmessenger-btn")) continue;
                    n.sg_type = "fbmessenger"
                }
                if ("sms" === n.sg_type && a.options.user_ios) {
                    var s = n.parentNode;
                    s.parentNode.removeChild(s)
                } else Sg_Utils.addListener(n, "click", function(e) {
                    var o = this.sg_type,
                        n = [],
                        s = [],
                        i = "",
                        r = {
                            enabled: !1,
                            width: 1,
                            height: 1,
                            timeout: 0
                        },
                        l = t.url;
                    l && "" !== l && null !== l && void 0 !== l || !t.urlCallback || "function" == typeof window[t.urlCallback] && "string" == typeof(l = (0, window[t.urlCallback])()) && "" !== l && "/" == l.charAt(0) && (l = a.options.sg_share_baseurl + l);
                    var c = "";
                    t.text && (c += t.text), l && (c += (t.text ? "\n\n" : "") + l);
                    f = l;
                    switch (a.options.campaign.enabled && (f += (f.indexOf("?") > -1 ? "&" : "?") + "utm_source=" + o + "&utm_medium=referral&utm_campaign=Sg_Social"), f = encodeURIComponent(f), o) {
                        case "pinterest":
                            r.enabled = !0, r.width = 750, r.height = 600, i = "https://www.pinterest.com/pin/create/button/?";
                            var d = encodeURIComponent(t.text.substring(0, 485 - l.length)) + " (...) " + l;
                            " (...) " == d && (d = ""), n.push("description=" + d), n.push("url=" + f), n.push("media=" + encodeURIComponent(t.media));
                            break;
                        case "email":
                            if ("" != a.options.recaptcha_public_key && !1 === t.forcemailto && !Sg_Utils.userAgentIsMobile()) {
                                var p = this.parentNode.parentNode.querySelector(".sg-emailbox");
                                return void(p ? Sg_Utils.hasClass(p, "sg-emailbox-hidden") ? (a.cleanUpEmailBox(p), a.cleanUpEmailBoxInputs(p), Sg_Utils.removeClass(p, "sg-emailbox-hidden")) : (Sg_Utils.addClass(p, "sg-emailbox-hidden"), a.cleanUpEmailBox(p), a.cleanUpEmailBoxInputs(p)) : (this.parentNode.parentNode.appendChild(a.getEmailTemplate(p, t)), p = this.parentNode.parentNode.querySelector(".sg-emailbox"), a.recaptchaLoaded || "" == a.options.recaptcha_public_key || (a.initRecaptcha(), a.recaptchasToLoad.push([p, t])), a.initEmailBoxRecaptcha(p, t), a.initEmailbox(p, t)))
                            }
                            i = "mailto:?", t.title && n.push("subject=" + t.title), n.push("body=" + encodeURIComponent(c));
                            break;
                        case "facebook":
                            i = "https://www.facebook.com/sharer/sharer.php?", r.enabled = !0, r.width = 556, r.height = 600, n.push("u=" + f), n.push("display=popup");
                            break;
                        case "fbmessenger":
                            i = "https://www.facebook.com/dialog/send?", r.enabled = !0, r.width = 750, r.height = 520, n.push("app_id=" + Sg_Social.options.fb_app_id), n.push("display=popup"), n.push("link=" + f), n.push("redirect_uri=" + encodeURIComponent(Sg_Social.options.sg_redirect_uri));
                            break;
                        case "googleplus":
                            i = "https://plus.google.com/share?", r.width = 750, r.height = 520, n.push("url=" + f);
                            break;
                        case "print":
                            window.print();
                            break;
                        case "link":
                            break;
                        case "sms":
                            i += "sms:?", n.push("body=" + encodeURIComponent(c));
                            break;
                        case "twitter":
                            i = "https://twitter.com/intent/tweet?", r.enabled = !0, r.width = 535, r.height = 461;
                            var u;
                            " (...)" == (u = t.twittercopy ? t.twittercopy : t.text.substring(0, 110) + " (...)") && (u = ""), n.push("url=" + f), n.push("text=" + encodeURIComponent(u)), Sg_Social.options.twitter_username && n.push("via=" + Sg_Social.options.twitter_username);
                            break;
                        case "linkedin":
                            i = "https://www.linkedin.com/shareArticle?", r.enabled = !0, r.width = 550, r.height = 560, n.push("mini=true"), n.push("url=" + f);
                            break;
                        case "whatsapp":
                            if ("title" === t.whatsapp_substring) c = "", t.title && (c += t.title), l && (c += (t.title ? "\n" : "") + l);
                            else if ("false" !== t.whatsapp_substring) {
                                var m = 500;
                                if ("number" == typeof t.whatsapp_substring && (m = t.whatsapp_substring), c = "", t.text) {
                                    var g = t.text,
                                        h = g.length;
                                    g = (g = g.substring(0, m)).substring(0, Math.min(g.length, g.lastIndexOf(" "))), h >= m && (g += "..."), c += g
                                }
                                l && (c += (t.text ? "\n\n" : "") + l)
                            }
                            i = "whatsapp://send?", n.push("text=" + encodeURIComponent(c));
                            break;
                        default:
                            return
                    }
                    if (n) {
                        s.push("width=" + r.width), s.push("height=" + r.height), s = s.join();
                        var f = i + n.join("&");
                        if (void 0 !== p && "email" === o) {
                            var b = document.createElement("iframe");
                            b.src = f, b.style.display = "none", document.body.appendChild(b), setTimeout(function() {
                                document.body.removeChild(b)
                            }, 4)
                        } else !0 !== r.enabled || Sg_Utils.userAgentIsMobile() ? window.open(f, r.enabled ? "_blank" : "_self") : window.open(f, "", 0 === s.length ? "" : s);
                        if (a.options.events.enabled) {
                            var v = l.replace(a.options.sg_share_baseurl, "");
                            window.ga("send", "event", "Sg_Social", o, v, !0)
                        }
                    }
                })
            }
        },
        getTranslation: function(e) {
            var t = this.options.lang,
                a = "[" + t + ":" + e + "]",
                o = {
                    pt: {
                        FIELD_EMPTY: "Campo vazio",
                        FIELD_INVALID: "Campo inválido",
                        MSG_SENT: "Mensagem enviada!",
                        SEND_TO_FRIEND: "Partilhar por email",
                        FRIENDS_EMAILS: "Email dos seus amigos (Separar vários emails com vírgulas)",
                        MESSAGE_TO_SEND: "Mensagem para enviar",
                        MESSAGE: "Mensagem",
                        SEND_BUTTON: "Enviar",
                        ERROR_SOMETHING: "Ocorreu um erro"
                    },
                    br: {
                        FIELD_EMPTY: "Campo vazio",
                        FIELD_INVALID: "Campo inválido",
                        MSG_SENT: "Mensagem enviada",
                        SEND_TO_FRIEND: "Compartilhar por email",
                        FRIENDS_EMAILS: "Email dos seus amigos (separar vários emails com vírgulas)",
                        YOUR_EMAIL: "O seu email",
                        MESSAGE_TO_SEND: "Mensagem para enviar",
                        MESSAGE: "Mensagem",
                        SEND_BUTTON: "Enviar",
                        ERROR_SOMETHING: "Ocorreu um erro"
                    },
                    en: {
                        FIELD_EMPTY: "Empty field",
                        FIELD_INVALID: "Invalid field",
                        MSG_SENT: "Message sent",
                        SEND_TO_FRIEND: "Share by email",
                        FRIENDS_EMAILS: "Friends' emails (separate multiple emails using commas)",
                        YOUR_EMAIL: "Your email",
                        MESSAGE_TO_SEND: "Message to send",
                        MESSAGE: "Message",
                        SEND_BUTTON: "Send",
                        ERROR_SOMETHING: "Something went wrong"
                    },
                    es: {
                        FIELD_EMPTY: "Campo vacío",
                        FIELD_INVALID: "Campo inválido",
                        MSG_SENT: "Mensaje enviado",
                        SEND_TO_FRIEND: "Compartir por correo electrónico",
                        FRIENDS_EMAILS: "Correos electrónicos de tus amigos (usar comas para separar)",
                        YOUR_EMAIL: "Tu correo electrónico",
                        MESSAGE_TO_SEND: "Mensaje para enviar",
                        MESSAGE: "Mensaje",
                        SEND_BUTTON: "Enviar",
                        ERROR_SOMETHING: "Ocurrió un error"
                    }
                };
            return o[t] && o[t][e] ? o[t][e] : a
        },
        getEmailTemplate: function(e, t) {
            var a = document.createElement("div");
            return a.innerHTML = '<form class="sg-emailbox"><div class="sg-emailbox-loader"><div class="sg-emailbox-loadert"><div class="sg-emailbox-loader-inner"><label>●</label><label>●</label><label>●</label><label>●</label><label>●</label><label>●</label></div></div></div><input type="hidden" name="ref" value="' + t.ref + '"><a href="#" class="sg-emailbox-close">&times</a><div class="sg-emailbox-desc">' + this.getTranslation("SEND_TO_FRIEND") + '</div><div class="sg-emailbox-flash sg-emailbox-flash-hidden"></div><div class="sg-emailbox-wrapper sg-emailbox-to-wrapper"><label for="to">' + this.getTranslation("FRIENDS_EMAILS") + '</label><input type="text" name="to" class="sg-social-emailbox-friend_emails" placeholder="email@' + location.host.replace("www.", "") + ", email@" + location.host.replace("www.", "") + '"><span class="sg-emailbox-error sg-emailbox-error-to"></span></div><div class="sg-emailbox-wrapper sg-emailbox-from-wrapper"><label for="from">' + this.getTranslation("YOUR_EMAIL") + '</label><input type="text" name="from" class="sg-social-emailbox-email" placeholder="me@' + location.host.replace("www.", "") + '"><span class="sg-emailbox-error sg-emailbox-error-from"></span></div><div class="sg-emailbox-wrapper sg-emailbox-message-wrapper"><label for="message">' + this.getTranslation("MESSAGE_TO_SEND") + '</label><textarea name="message" class="sg-social-emailbox-message" placeholder="' + this.getTranslation("MESSAGE") + '"></textarea><span class="sg-emailbox-error sg-emailbox-error-message"></span></div><div class="sg-emailbox-wrapper sg-emailbox-recaptcha-wrapper"><div class="sg-social-emailbox-recaptcha"></div><span class="sg-emailbox-error sg-emailbox-error-recaptcha"></span></div><button class="sg-emailbox-send">' + this.getTranslation("SEND_BUTTON") + "</button></form>", a.children[0]
        },
        showErrorEmailBox: function(e, t, a) {
            var o = e.split("|"),
                n = o[0],
                s = o[1],
                i = ".sg-emailbox-" + n.toLowerCase() + "-wrapper",
                r = this.getTranslation(s);
            Sg_Utils.forEach(t.querySelectorAll(i), function(e, t) {
                Sg_Utils.addClass(e, "sg-emailbox-wrapper-has_error");
                var a = e.querySelectorAll(".sg-emailbox-error");
                a && ((e = a[0])[e.textContent ? "textContent" : "innerText"] = "* " + r)
            })
        },
        cleanUpEmailBox: function(e) {
            Sg_Utils.removeClass(e, "sg-emailbox--loading"), Sg_Utils.forEach(e.querySelectorAll(".sg-emailbox-error"), function(e, t) {
                e[e.textContent ? "textContent" : "innerText"] = ""
            }), Sg_Utils.forEach(e.querySelectorAll(".sg-emailbox-wrapper"), function(e, t) {
                Sg_Utils.removeClass(e, "sg-emailbox-wrapper-has_error")
            }), Sg_Utils.forEach(e.querySelectorAll(".sg-emailbox-flash"), function(e, t) {
                e[e.textContent ? "textContent" : "innerText"] = "", Sg_Utils.addClass(e, "sg-emailbox-flash-hidden"), Sg_Utils.removeClass(e, "sg-emailbox-flash--success"), Sg_Utils.removeClass(e, "sg-emailbox-flash--error")
            })
        },
        cleanUpEmailBoxInputs: function(e) {
            e.message.value = "", e.to.value = "", e.from.value = ""
        },
        initEmailbox: function(e, t) {
            var a = this;
            Sg_Utils.addListener(document.body, "click", function(a) {
                for (var o = t.element.querySelector(".sg-email-share"), n = a.target, s = !0; n;) {
                    if (n == e || n == o) {
                        s = !1;
                        break
                    }
                    n = n.parentNode
                }
                s && (Sg_Utils.hasClass(e, "sg-emailbox-hidden") || Sg_Utils.addClass(e, "sg-emailbox-hidden"))
            }), Sg_Utils.addListener(e.querySelector(".sg-emailbox-close"), "click", function(t) {
                t.preventDefault(), t.stopPropagation(), Sg_Utils.hasClass(e, "sg-emailbox-hidden") || Sg_Utils.addClass(e, "sg-emailbox-hidden")
            }), Sg_Utils.addListener(e.querySelector(".sg-emailbox-send"), "click", function(o) {
                o.preventDefault();
                var n = {
                    message: e.message.value,
                    ref: e.ref.value,
                    to: e.to.value,
                    from: e.from.value,
                    url: t.url,
                    "g-recaptcha-response": e["g-recaptcha-response"].value
                };
                a.cleanUpEmailBox(e), Sg_Utils.addClass(e, "sg-emailbox--loading"), Sg_Utils.request(a.options.share_email_endpoint, "POST", n, function(o) {
                    if ("string" == typeof o) Sg_Utils.forEach(e.querySelectorAll(".sg-emailbox-flash"), function(e, t) {
                        e[e.textContent ? "textContent" : "innerText"] = a.getTranslation("ERROR_SOMETHING"), Sg_Utils.removeClass(e, "sg-emailbox-flash-hidden"), Sg_Utils.removeClass(e, "sg-emailbox-flash--success"), Sg_Utils.addClass(e, "sg-emailbox-flash--error")
                    });
                    else if (o.sent) {
                        if (e.message.value = "", e.to.value = "", e.from.value = "", Sg_Utils.forEach(e.querySelectorAll(".sg-emailbox-flash"), function(e, t) {
                                e[e.textContent ? "textContent" : "innerText"] = a.getTranslation("MSG_SENT"), Sg_Utils.removeClass(e, "sg-emailbox-flash-hidden"), Sg_Utils.addClass(e, "sg-emailbox-flash--success"), Sg_Utils.removeClass(e, "sg-emailbox-flash--error")
                            }), "undefined" != typeof grecaptcha) try {
                            grecaptcha.reset(t.recaptchaId)
                        } catch (e) {}
                    } else {
                        Sg_Utils.forEach(e.querySelectorAll(".sg-emailbox-flash"), function(e, t) {
                            e[e.textContent ? "textContent" : "innerText"] = a.getTranslation("ERROR_SOMETHING"), Sg_Utils.removeClass(e, "sg-emailbox-flash-hidden"), Sg_Utils.removeClass(e, "sg-emailbox-flash--success"), Sg_Utils.addClass(e, "sg-emailbox-flash--error")
                        });
                        for (var n = 0; n < o.errors.length; n++) a.showErrorEmailBox(o.errors[n], e, t);
                        if ("undefined" != typeof grecaptcha) try {
                            grecaptcha.reset(t.recaptchaId)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    Sg_Utils.removeClass(e, "sg-emailbox--loading")
                })
            })
        },
        fetchAllButtonsFromBlocks: function() {
            for (var e in this.blocks) {
                var t = this.blocks[e],
                    a = t.element.querySelectorAll(".sg-social button");
                this.initButtons(a, t), t.element.className = t.element.className.replace(/\bsg-social-hidden\b/, "")
            }
        },
        fetchAllBlocks: function() {
            var e = this;
            Sg_Utils.forEachElement(".sg-social", function(t, a) {
                var o = t.getAttribute("data-title"),
                    n = t.getAttribute("data-ref"),
                    s = null !== t.getAttribute("data-forcemailto") && "true" == t.getAttribute("data-forcemailto"),
                    i = t.getAttribute("data-url");
                if (!i) {
                    var r = t.getAttribute("data-url-selector-id");
                    if (r) {
                        var l = document.getElementById(r).querySelectorAll("a");
                        1 == l.length && (i = l[0].getAttribute("href"), o || (o = l[0].textContent))
                    }
                }
                i = function(t) {
                    return "string" == typeof t && "" !== t && "/" == t.charAt(0) && (t = e.options.sg_share_baseurl + t), t
                }(i);
                var c = t.getAttribute("data-url-callback"),
                    d = t.getAttribute("data-twitter-copy"),
                    p = t.getAttribute("data-text");
                if (!p) {
                    var u = t.getAttribute("data-text-selector-id");
                    if (u) {
                        var m = document.getElementById(u);
                        m && m.innerText && (p = m.innerText)
                    } else p = ""
                }
                var g = t.getAttribute("data-media"),
                    h = {
                        type: "",
                        id: "",
                        position: "",
                        list: ""
                    },
                    f = t.getAttribute("data-whatsapp-substring");
                isNaN(parseInt(f)) || (f = parseInt(f)), f || (f = 500), e.blocks[a] = {
                    element: t,
                    title: o,
                    url: i,
                    urlCallback: c,
                    twittercopy: d,
                    text: p,
                    track: h,
                    media: g,
                    ref: n,
                    forcemailto: s,
                    whatsapp_substring: f
                }
            })
        }
    }
}(), SGSocial = Sg_Social;
var medicoresponde;
medicoresponde = function() {
    "use strict";

    function e() {
        var e, t, a;
        Sg_Utils.forEachElement(".box-tags", function(o) {
            if (o.offsetHeight < n) return !1;
            Sg_Utils.addClass(o, "collapsable"), (t = document.createElement("button")).className = "view-more--btn", t.innerHTML = "Continuar lendo<i></i>", Sg_Utils.addListener(t, "click", function(e) {
                e.preventDefault(), (a = e.srcElement.parentElement.parentElement) && (Sg_Utils.removeClass(a, "collapsable"), a.removeChild(e.srcElement.parentElement)), ga("set", "nonInteraction", !0)
            }), (e = document.createElement("div")).className = "view-more", e.appendChild(t), o.appendChild(e)
        })
    }

    function t(e) {
        Sg_Utils.request("/ajax/", "GET", {
            func: "getresults",
            query: e
        }, function(e) {
            document.getElementById("ajax_results").innerHTML = e
        })
    }

    function a() {
        var t = document.getElementById("ask-button-js");
        t && Sg_Utils.addListener(t, "click", function(e) {
            Sg_Utils.removeClass(document.body, "menu-opened--header"), Sg_Utils.removeClass(document.body, "search-opened--header"), Sg_Utils.toggleClass(document.body, "ask-opened--header"), ga("set", "nonInteraction", !0)
        });
        var a = document.getElementById("ask-button-2-js");
        a && Sg_Utils.addListener(a, "click", function(e) {
            Sg_Utils.removeClass(document.body, "menu-opened--header"), Sg_Utils.removeClass(document.body, "search-opened--header"), Sg_Utils.toggleClass(document.body, "ask-opened--header"), ga("set", "nonInteraction", !0)
        });
        var o = document.getElementById("search-button-js");
        o && Sg_Utils.addListener(o, "click", function(e) {
            Sg_Utils.removeClass(document.body, "ask-opened--header"), Sg_Utils.removeClass(document.body, "menu-opened--header"), Sg_Utils.toggleClass(document.body, "search-opened--header"), this.blur(), document.getElementById("search-input-js").focus(), ga("set", "nonInteraction", !0)
        });
        var n = document.getElementById("toggle-menu-header");
        n && Sg_Utils.addListener(n, "click", function(e) {
            Sg_Utils.removeClass(document.body, "ask-opened--header"), Sg_Utils.removeClass(document.body, "search-opened--header"), Sg_Utils.toggleClass(document.body, "menu-opened--header"), ga("set", "nonInteraction", !0)
        });
        var s = document.getElementById("toggle-menu-footer");
        s && Sg_Utils.addListener(s, "click", function(e) {
            Sg_Utils.removeClass(document.body, "search-opened--header"), Sg_Utils.removeClass(document.body, "menu-opened--header"), Sg_Utils.toggleClass(document.body, "menu-opened--footer"), window.scrollTo(0, window.document.body.scrollHeight), ga("set", "nonInteraction", !0)
        }), Sg_Utils.forEachElement(".menu-dropdown--more", function(e) {
            Sg_Utils.addListener(e, "click", function(t) {
                Sg_Utils.forEachElement(".menu-dropdown--more.show-items", function(t) {
                    e !== t && Sg_Utils.removeClass(t, "show-items")
                }), Sg_Utils.toggleClass(e, "show-items"), ga("set", "nonInteraction", !0)
            })
        }), e()
    }
    var o = !1,
        n = 500;
    return {
        init: function() {
            if (o) return !1;
            o = !0, SGSocial.init({
                sg_share_baseurl: "https://www.medicoresponde.com.br",
                fb_app_id: "129745340455216",
                recaptcha_public_key: "6LfHlgwTAAAAAH8tnwCo0eYTO6vOztL0s_EBV2SN",
                share_email_endpoint: "/share_email.php"
            }), (window.innerWidth > 0 ? window.innerWidth : screen.width) < 1024 && document.getElementById("social") && window.addEventListener("scroll", function() {
                medicoresponde.stickySocialButtons("article-header", "article-content")
            }), a()
        },
        questionAjax: function() {
            var e, a = document.getElementById("question_ajax_answers");
            if (!a) return !1;
            t(a.value), Sg_Utils.addListener(a, "input", function(o) {
                e && clearTimeout(e), e = setTimeout(t, 1e3, a.value)
            })
        },
        stickySocialButtons: function(e, t) {
            var a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
                e = document.getElementById(e),
                t = document.getElementById(t),
                o = document.getElementById("social"),
                n = e.children[0].offsetHeight + 10,
                s = e.offsetTop,
                i = t.className.replace(" sticky-social", ""),
                r = document.getElementsByClassName("citation");
            a >= s + n ? (o.className = "social fixed-social", t.className = i + " sticky-social", 0 == r.length && t.setAttribute("style", "top:" + (n - o.offsetHeight / 2 + 2) + "px")) : (o.className = "social", t.className = i.replace(" sticky-social", ""), 0 == r.length && t.setAttribute("style", "top:auto"))
        }
    }
}(), window.medicoresponde = medicoresponde, window[window.attachEvent ? "attachEvent" : "addEventListener"](window.attachEvent ? "onload" : "load", function() {
    medicoresponde.init()
}, !1);