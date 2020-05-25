var nouns = [
    'Potato Chip',
    'Banana',
    'Bandana',
    'Lobster',
    'Umbrella',
    'Houseplant',
    'Coffee Table',
    'Footrest',
    'Candle',
    'Chocolate',
    'Firework',
    'Ramen',
    'Lamp',
    'Duckling',
    'Ranch Dressing',
    'Bicep',
    'Hammer',
    'Bonsai',
    'Snorkel',
    'Brick',
    'Dice',
    'Lightbulb',
    'Pizza',
    'Woodwind',
    'Onion',
    'Paddock',
    'Parsnip',
    'Mellotron',
    'Harpsichord',
    'Saloon',
    'Quail',
    'Loincloth',
    'Disco',
    'K-pop',
    'Oven',
    'Pan Flute',
    'Ravioli',
    'Fjord',
    'Haversack',
    'Bagpipe',
    'Cupcake',
    'Sombrero',
    'Dinosaur',
    'Lentil',
    'Lotion',
    'Sidewalk',
    'Printer',
    'Cappuccino',
    'Wand',
    'Caterpillar',
    'Athlete',
    'Apple',
    'Hacky Sack'
];

var verbs = [
    'Adorner',
    'Sculpter',
    'Arranger',
    'Engineer',
    'Technologist',
    'Philosopher',
    'Consultant',
    'Regulator',
    'Exporter',
    'Critic',
    'Blogger',
    'Illustrator',
    'Inspector',
    'Smuggler',
    'Zealot',
    'Wizard',
    'Photographer',
    'Champion',
    'Activist',
    'Cultivator',
    'Therapist',
    'Supervisor',
    'Captain',
    'Worshiper',
    'Organizer',
    'Inventor',
    'Fabricator',
    'Investor',
    'Judge',
    'Visionary',
    'Harvester',
    'Assembler',
    'Constructor',
    'Manufacturer',
    'Propogator',
    'Summoner',
    'Administrator',
    'Coordinator',
    'Assistant',
    'Orchestrator',
    'Technician',
    'Representative',
    'Strategist',
    'Architect',
    'Analyst',
    'Liason',
    'Executive',
    'Director',
    'Scientist',
    'Counter',
    'Journalist',
    'Auditor',
    'Specialist',
    'Counselor',
    'Trader',
    'Master',
    'Appraiser',
    'Examiner',
    'Labourer',
    'Secretary',
    'Artist',
    'Stylist',
    'Operator',
    'Auditor',
    'Investigator',
    'Coach',
    'Polisher',
    'Surveyer',
    'Statistician',
    'Dealer',
    'Pilot',
    'Painter',
    'Chronicler',
    'Researcher',
    'Enthusiast',
    'Evangelist',
    'Connoisseur',
    'Advocate',
    'Photocopier',
    'Operative',
    'Artisan',
    'Emissary',
    'Columnist'
];

//var jobTitleElement;
var setHTMLList = [];
var lastJobString = "";

function ClearTimeouts(timeout)
{
    clearTimeout(timeout);
}

function Makejob()
{
    setHTMLList.forEach(ClearTimeouts);
    //jobTitleElement = document.getElementById('jobTitles');
    var randomNumber1 = Math.floor(Math.random() * (nouns.length));
    var randomNumber2 = Math.floor(Math.random() * (verbs.length));
    lastJobString = nouns[randomNumber1] + " " + verbs[randomNumber2];
    matrixString(lastJobString);
}

function matrixString(jobString)
{
    var tempJob;
    //SetHTML(jobString.length);
    for(var i = 0; i <= jobString.length; i++)
    {
        tempJob = jobString.substring(0, i);
        var line = "Programmer | UI Designer | <a class='FakeJob' href='#' onclick='MakeJobDelay()\'>" + tempJob + "</a>";
        var timeout = setTimeout(SetHTML, i*50, line);
        setHTMLList.push(timeout);
    }
}

function ReverseMatrixString()
{
    for(var i = 0; i <= lastJobString.length; i++)
    {
        tempJob = lastJobString.substring(0, lastJobString.length - i);
        var line = "Programmer | UI Designer | <a class='FakeJob' href='#' onclick='MakeJobDelay()\'>" + tempJob + "</a>";
        setTimeout(SetHTML, i*15, line);
    }
}

function SetHTML(line)
{
    document.getElementById('jobTitles').innerHTML = line;
}

function MakeJobDelay()
{
    if(lastJobString.length == 0)
    {
        Makejob();      
    }
    else
    {
        ReverseMatrixString();
        setTimeout(Makejob, 400);     
    }
    
}

window.onload = MakeJobDelay;
