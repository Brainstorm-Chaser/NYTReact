const API = require("./API")
// @ponicode
describe("API.default.getArticles", () => {
    test("0", () => {
        let callFunction = () => {
            API.default.getArticles()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("API.default.getArticle", () => {
    test("0", () => {
        let callFunction = () => {
            API.default.getArticle(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            API.default.getArticle(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            API.default.getArticle("a85a8e6b-348b-4011-a1ec-1e78e9620782")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            API.default.getArticle("03ea49f8-1d96-4cd0-b279-0684e3eec3a9")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            API.default.getArticle(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            API.default.getArticle(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("API.default.deleteArticle", () => {
    test("0", () => {
        let callFunction = () => {
            API.default.deleteArticle(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            API.default.deleteArticle(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            API.default.deleteArticle(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            API.default.deleteArticle(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            API.default.deleteArticle("03ea49f8-1d96-4cd0-b279-0684e3eec3a9")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            API.default.deleteArticle(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("API.default.saveArticle", () => {
    test("0", () => {
        let callFunction = () => {
            API.default.saveArticle("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            API.default.saveArticle(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
