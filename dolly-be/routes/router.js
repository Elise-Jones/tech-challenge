const express = require("express");
const router = express.Router();
router.get("/users", (req, res) => {
  const userData = [
    {
      "id": 1,
      "quote": "Storms make trees take deeper roots." ,
    },
    {
      "id": 2,
      "quote": "The way I see it, if you want the rainbow, you gotta put up with the rain." ,
    },
    {
      "id": 3,
      "quote": "The way I see it, if you want the rainbow, you gotta put up with the rain." ,
    },
    {
      "id": 4,
      "quote": "If you see someone without a smile today, give 'em yours." ,
    },
    {
      "id": 5,
      "quote": "" ,
    },
    {
      "id": 6,
      "quote": "If you don't like the road you're walking, start paving another one." ,
    },
    {
      "id": 7,
      "quote": "I have a strict policy that nobody cries alone in my presence." ,
    },
    {
      "id": 8,
      "quote": "We cannot direct the wind, but we can adjust the sails." ,
    },
    {
      "id": 31,
      "quote": "Don’t get so busy making a living that you forget to make a life." ,
    },
    {
      "id": 9,
      "quote": "When someone shows you their true colors, believe them." ,
    },
    {
      "id": 10,
      "quote": "You'll never do a whole lot unless you're brave enough to try." ,
    },
    {
      "id": 11,
      "quote": "People say, 'how you stay looking so young?' I say, well, good lighting, good doctors, and good makeup." ,
    },
    {
      "id": 12,
      "quote": "I think everybody should be allowed to be who they are, and to love who they love." ,
    },
    {
      "id": 13,
      "quote": "A rhinestone shines just as good as a diamond." ,
    },
    {
      "id": 14,
      "quote": "The magic is inside you, there ain’t no crystal ball." ,
    },
    {
      "id": 15,
      "quote": "I make a point to appreciate all the little things in my life. I go out and smell the air after a good, hard rain. These small actions help remind me that there are so many great, glorious pieces of good in the world." ,
    },
    {
      "id": 16,
      "quote": "I've had heartaches, headaches, toothaches, earaches, and I've had a few pains in the ass, but I've survived to tell about it." ,
    },
    {
      "id": 17,
      "quote": "I was the first woman to burn my bra—it took the fire department four days to put it out." ,
    },
    {
      "id": 18,
      "quote": "Every single diet I ever fell off of was because of potatoes and gravy of some sort." ,
    },
    {
      "id": 19,
      "quote": "My weaknesses have always been food and men—in that order." ,
    },
    {
      "id": 20,
      "quote": "You can wish your life away. But if you're going to dream, you're going to have to get out and, like I always say, you have to put some wings on them dreams, and some feet and fingers and some hands. They gotta get into some stuff. You can't just sit around and think of all the things you want to do. You've got to think of what you want to do, and then you've got to get out and make that happen." ,
    },
    {
      "id": 21,
      "quote": "When I wake up, I expect things to be good. If they're not, then I try to set about trying to make them as good as I can 'cause I know I'm gonna have to live that day anyway. So why not try to make the most of it if you can?" ,
    }
   
  ];

  res.send(userData)
});

module.exports = router;
