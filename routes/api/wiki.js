const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

const url = 'https://zelda.gamepedia.com/api.php?format=json&action=query&generator=images&gimlimit=max&prop=imageinfo&iiprop=url&titles=Hyrule_Compendium#Entries';
router.get('/gamepedia', async (req, res, next) => {
  const json = await (await fetch(url)).json();
  console.log(json);
  res.send(json);
});
module.exports = router;

// /api/wiki/gamepedia