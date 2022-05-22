function firstSentence() {
    let adjective = ['ordinary', 'magnificent', 'fluttering', 'scandalous', 'delicate', 'abnormal', 'brash', 'creepy', 'clumsy',
                     'regular', 'sturdy', 'wasteful', 'lazy', 'dark', 'bright', 'combative', 'scattered', 'frightening', 
                     'fortunate', 'hard', 'beautiful', 'dull', 'loving', 'annoying', 'whole', 'lively', 'terrific', 'holistic', 
                     'shocking', 'private', 'classy', 'guarded', 'valuable', 'rotten', 'super', 'steady', 'premium', 'enthusiastic',
                     'dapper', 'tranquil', 'absurd', 'majestic', 'brawny'];
    let randomAdj = adjective[Math.floor(Math.random() * adjective.length-1)];
    return 'Today is going to be a ' + randomAdj + ' day.';
}

function secondSentence() {
    let phrase = ['a cup of joe to fall into your lap.', 'to put on your thinking cap.', 'a random high five.', 'to be as happy as a clam.',
                  'to fly off the handle.', 'to be dead as a doornail.', 'to be caught red-handed.', 'to have compassion fatigue.', 
                  'for the day to go hard and fast.', 'to meet the nation of shopkeepers.', 'to hunt and peck.', 'to meet someone politically correct.', 
                  'to mince words.', 'to go up a blind alley.', 'to find fool\'s gold.', 'to go surfing.', 'to go out on a limb.', 'to have an axe to grind.',
                  'to catch the cheese touch.', 'to meet a random cat.', 'to meet Edward from Twilight <3.', 'to be as mad as a hatter today.',
                  'to find a chip on your shoulder.'];
    let randomPhrase = phrase[Math.floor(Math.random() * phrase.length-1)];
    return 'You can expect ' + randomPhrase; 
}

function thirdSentence() {
    let advice = ['good things come for those who wait.', 'do not check work email on your days off.', 'a long walk alone with some time to think, can work wonders.', 
                  'what\'s stopping you.', 'never regret.', 'winter is coming.', 'to cleanly remove the seed from an avocado, lay a knife firmly across it and twist.',
                  'don\'t take it personally.', 'when you\'re looking up at birds flying overhead, keep your mouth closed.', 'don\'t let the bastards grind you down.',
                  'turn jeans inside out when washing them to help preserve their colour.', 'if it ain\'t broke don\'t fix it.', 'don\'t eat non-snow-coloured snow.', 
                  'some people would be better off if they took their own advice.', 'when something goes wrong in life, just shout "plot twist!" and carry on.', 
                  'good advice is something a man gives when he is too old to set a bad example.', 'smile and the world smiles with you. Frown and you\'re on your own.', 
                  'never write in an email to someone, something which you wouldn\'t say to that person\'s face.', 'you\'re not as fat as you think you are.', 
                  'it\'s unlucky to be superstitious.'];
    let randomAdvice = advice[Math.floor(Math.random() * advice.length-1)];
    return 'Your advice for today: ' + randomAdvice; 
}

console.log(firstSentence() + ' ' + secondSentence() + ' ' + thirdSentence()); 