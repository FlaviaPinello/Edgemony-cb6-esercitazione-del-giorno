const express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
const Nota = mongoose.model('notaModel');

router.get('/', (req, res) => {
    res.render("addupdate", {
        viewTitle: "Inserisci una nota"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
});

function insertRecord(req, res) {
    let nota = new Nota();
    nota.brand = req.body.brand;
    nota.collection = req.body.collection;
    nota.email = req.body.email;
    nota.number_outfit = req.body.number_outfit;
    nota.years = req.body.years;
    nota.text = req.body.text;
    nota.save((err, doc) => {
        if (!err)
            res.redirect('list');
            else
                console.log(`Errore nell' inserimento: ${err}`);
        })
    }; 


function updateRecord(req, res) {
    Nota.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('list'); }
            else {
                console.log('Errore durante l\' update : ' + err);
        }
    });
}

router.get('/list', (req, res) => {
    Nota.find((err, docs) => {
        if (!err) {
            res.render("list", {
                notalist: docs
            });
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});


router.get('/:id', (req, res) => {
    Nota.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("addupdate", {
                viewTitle: "Aggiornamento",
                nota: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Nota.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/list');
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});

module.exports = router;