var express = require('express')
var router = express.Router()
const knex = require('../database/client')

const offersModel =  [{
    offerId:                1,
    validSince:       "date",
    validThrough:     "eTime",
    usageLimit:        "/// how many times a user can use it", 
    image:            "https://previews.123rf.com/images/yktr/yktr1611/yktr161100007/68034748-a-cup-of-coffee-latte.jpg",
    short_descriptin: "ing",
    full_descriptin:  "Late",
    type:             "ing", // to be enum
    redeemedPoints:   13,
    Ally:             "y?",   // @relation(fields: [allyId], references: [id])
    allyId:           "?"
  },
  {
    offerId:                2,
    validSince:       "date2",
    validThrough:     "eTime2",
    usageLimit:        "/// 2how many times a user can use it", 
    image:            "https://previews.123rf.com/images/yktr/yktr1611/yktr161100007/68034748-a-cup-of-coffee-latte.jpg",
    short_descriptin: "ing2",
    full_descriptin:  "Black Coffee",
    type:             "ing2", // to be enum
    redeemedPoints:   133,
    Ally:             "y?2",   // @relation(fields: [allyId], references: [id])
    allyId:           "?2"
  }]

  const getOffersModel = () => {
    return knex.select().from('alloffers').orderBy('usageLimit')
  }


router.get('/', async function (req, res) {
  const offerList = await getOffersModel()
  res.send(offerList)
})

router.get('/:offerId', function (req, res) {
    // parameters are strings, so in some cases you may need to convert them to a different type
    const id = parseInt(req.params.offerId)
    // use the JS Array.prototype.find method to get the first matching entity from the list
    const offer = offersModel.find((x) => x.offerId === id)
    if (offer) {
      res.send(offer)
    } else {
      res.status(404).send()
    }
  })

module.exports = router