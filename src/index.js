'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.7c4bb79f-9932-4494-bf6f-ebb047eb2eab"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'GOT Facts';

/**
 * Array containing Game of Thrones facts.
 */
var FACTS = [
    "Tyrion Lannister has appeared in more episodes than any other character -- 54 out of a possible 60, including the Season 6 finale.",
    "There are only five episodes in the entire series thus far in which nobody dies on screen, and only two of those -- The Bear and the Maiden Fair in Season 3 and Blood of My Blood in Season 6 -- don't feature any deaths on screen or off. That's remarkable considering the former is the episode in which Brienne fought a bear.",
    "When Tywin Lannister appeared first in Game of Thrones at the end of Season 1, he lectured Jaime on legacy and family while skinning a stag. That stag was an actual dead stag and actor Charles Dance actually was skinning it.",
    "Game of Thrones has included, to date, nine actors who appeared in Harry Potter movies.",
    "Game of Thrones has included, to date, eight actors who were in Star Wars: The Force Awakens",
    "Game of Thrones is one of most expensive shows on TV. The average episode costs HBO $6 million to make.",
    "Northern Ireland says 'Game of Thrones' has brought more than $100 million to their economy.",
    "Showrunner David Benioff was already an accomplished Hollywood screenwriter before 'Game of Thrones.' before GoT, Benioff has written several hit movies, including Troy, 25th Hour and X-Men Origins: Wolverine. ",
    "The show almost didn't make it to air because the original pilot was so bad.  Producers decided to reshoot the entire pilot with five roles recast, including Michelle Fairley and Emilia Clarke stepping in for Catelyn and Daenerys.",
    "Emilia Clarke's Daenerys has become so popular, 146 baby girls were named Khaleesi in 2013.",
    "The show's Emmy Award-winning costumes are aged two weeks to perfect their gritty look.",
    "King's Landing, Winterfell and the Wall have appeared in every single one of the title sequences, the title credits have already won an Emmy too.",
    "After winning the Primetime Emmy Award for Outstanding Supporting Actor in a Drama Series, Peter Dinklage became the show's top-billed star.",
    "More than two feet of human hair is used to make each of the show's Emmy-nominated wigs.",
    "Two languages, Dothraki and Valyrian, were created for the television show from only a few words. Linguist David J. Peterson, founder of the Language Creation Society, developed Dothraki and Valyrian into full, grammatical languages so that the show's actors could actually speak.",
    "It’s also the most pirated show on television. BitTorrent says the 2013 season finale of Game of Thrones was downloaded via their site 5.9 million times."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random GOT fact from the GOT facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your Game of Thrones fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a Game of Thrones fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};