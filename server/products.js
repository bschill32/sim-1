

module.exports = {
    read: (req, res) => {
        let db = req.app.get('db')
        db.getProducts().then(response => {
            res.status(200).send(response)
        }).catch(err => {
            console.log('error fetching products:', err)
            res.status(500).send(err)
        })
    },

    get: (req, res) => {
        let db = req.app.get('db')
        let {id} = req.params
        db.getProduct({id}).then(response => {
            res.status(200).send(response)
        }).catch(err => {
            console.log('error fetching products:', err)
            res.status(500).send(err)
        })
    },

    create: (req, res) => {
        let db = req.app.get('db')
        let {name, price, img} = req.body
        db.createProduct([name, price, img]).then(response => {
            res.status(200).send(response)
        }).catch(err => {
            console.log('error fetching products:', err)
            res.status(500).send(err)
        })
    },

    update: (req, res) => {
        let db = req.app.get('db')
        let {id} = req.params
        let edit = req.body
        edit.id = id
        db.updateProduct(edit).then(response => {
            res.status(200).send(response)
        }).catch(err => {
            console.log('error fetching products:', err)
            res.status(500).send(err)
        })
    },

    delete: (req, res) => {
        let db = req.app.get('db')
        let {id} = req.params
        db.deleteProduct({id}).then(response => {
            res.status(200).send(response)
        }).catch(err => {
            console.log('error fetching products:', err)
            res.status(500).send(err)
        })
    },
}