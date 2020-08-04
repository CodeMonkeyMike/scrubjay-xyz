const name = 'index';

const content = `
<h1>Scrub Jay!</h1>
<h2>Welcome to my random thoughts!</h2>
<p>Click through the navigation to see more</p>
<h3>Land Vehicles</h3>
<ul>
    <li><a href="https://rivian.com">Rivian</a> - Electric Truck</li>
    <li><a href="https://en.wikipedia.org/wiki/Suzuki_X-90">Suzuki X-90</a> - Mini Car</li>
    <li><a href="https://en.wikipedia.org/wiki/Kei_car">Kei Car</a> - Japanese standard for small cars that were subsidized in cost</li>
    <li><a href="https://www.icon4x4.com">Icon 4x4</a> - New hand made Toyota FJ/Jeep CJ style trucks</li>
    <li><a href="https://ineosgrenadier.com">Ineos Grenadier</a> - European military style 4x4</li>
</ul>
<h3>Space - The Final Frontier</h3>
<ul>
    <li><a href="https://www.cleardarksky.com">Clear Dark Sky</a> - Star gazing map (light pollution)</li>
    <li><a href="https://darksitefinder.com">Dark Site Finder</a> - Better designed/less info star gazing map (light pollution)</li>
    <li><a href="https://stellarium.org">Stellarium</a> - FOSS Planetarium (locate planets/stars)</li>
</ul>
<h3>Sailing and Boating</h3>
<ul>
    <li><a href="https://www.x-cat.com/en/mobility">X-Cat</a> - Sail Catamaran that is roof toppable</li>
    <li><a href="https://en.wikipedia.org/wiki/Snark_sailboat">Snark Sailboat</a> - Cheap ass sailboats</li>
    <li><a href="https://tiwal.com/en/tiwal3">Tiwal 3</a> - Inflatable sailboat</li>
    <li><a href="https://www.sea-doo.com/us/en/models/rec-lite/spark.html">See Doo Spark</a></li>
    <li><a href="https://outfitedge.com">Outfit Edge</a> - Foldable Kayak seller</li>
    <li><a href="https://redbeardsailing.com">Red Beard Sailing</a> - Foldable Kayak seller</li>
    <li><a href="https://www.sailboatstogo.com">Sail Boats To Go</a> - Foldable Kayak seller</li>
    <li><a href="https://www.state.nj.us/dep/fgw/pdf/boat_ramp_guide.pdf">NJ Boater's Ramp Guide</a> - List of boat ramps in NJ (PDF)</li>
</ul>
<h3>Youtubers</h3>
<ul>
    <li><a href="https://www.youtube.com/channel/UC2C_jShtL725hvbm1arSV9w">CGP Grey</a></li>
    <li><a href="https://www.youtube.com/channel/UC1lIHn3KlcJimyxsVugP4uw">Aging Wheels</a></li>
    <li><a href="https://www.youtube.com/channel/UC2Rlv-ug-mtnXuMwlpcqFgg">Black Magic Craft</a></li>
    <li><a href="https://www.youtube.com/channel/UC2SMpy2oZV6BoyJEYShw9bw">TA Outdoors</a></li>
    <li><a href="https://www.youtube.com/channel/UC5I2hjZYiW9gZPVkvzM8_Cw">Techmoan</a></li>
    <li><a href="https://www.youtube.com/channel/UC7qPftDWPw9XuExpSgfkmJQ">Nostalgia Nerd</a></li>
    <li><a href="https://www.youtube.com/channel/UCBa659QWEk1AI4Tg--mrJ2A">Tom Scott</a></li>
    <li><a href="https://www.youtube.com/channel/UCAL3JXZSzSm8AlZyD3nQdBA">Primitive Technology</a></li>
    <li><a href="https://www.youtube.com/channel/UC8uT9cgJorJPWu7ITLGo9Ww">The 8-Bit Guy</a></li>
    <li><a href="https://www.youtube.com/channel/UCDVK2t-ttSjXHnGejDvVm1g">Dasher Design & Restoration</a></li>
    <li><a href="https://www.youtube.com/channel/UCDsElQQt_gCZ9LgnW-7v-cQ">Kirsten Dirksen</a></li>
    <li><a href="https://www.youtube.com/channel/UCFhXFikryT4aFcLkLw2LBLA">NileRed</a></li>
    <li><a href="https://www.youtube.com/channel/UCGc8ZVCsrR3dAuhvUbkbToQ">City Beautiful</a></li>
    <li><a href="https://www.youtube.com/channel/UCMOqf8ab-42UUQIdVoKwjlQ">Practical Engineering</a></li>
    <li><a href="https://www.youtube.com/channel/UCMb0O2CdPBNi-QqPk5T3gsQ">James Hoffman</a></li>
    <li><a href="https://www.youtube.com/channel/UCPxHg4192hLDpTI2w7F9rPg">Well There's Your Problem Podcast</a></li>
    <li><a href="https://www.youtube.com/channel/UCUpkp-6fXuG9dqfoJ99XTmw">Puffin Forest</a></li>
    <li><a href="https://www.youtube.com/channel/UCasG9kJWi1eVxM0QkyqKVJQ">Hand Tool Rescue</a></li>
    <li><a href="https://www.youtube.com/channel/UCerEIdrEW-IqwvlH8lTQUJQ">Tech Tangents</a></li>
    <li><a href="https://www.youtube.com/channel/UCeh-pJYRZTBJDXMNZeWSUVA">Artifexian</a></li>
    <li><a href="https://www.youtube.com/channel/UCiDJtJKMICpb9B1qf7qjEOA">Adam Savage's Tested</a></li>
    <li><a href="https://www.youtube.com/channel/UChIs72whgZI9w6d6FhwGGHA">Gamers Nexus</a></li>
    <li><a href="https://www.youtube.com/channel/UCj9IJ2QvygoBJKSOnUgXIRA">PhilsComputerLab</a></li>
    <li><a href="https://www.youtube.com/channel/UCioZY1p0bZ4Xt-yodw8_cBQ">How To Drink</a></li>
    <li><a href="https://www.youtube.com/channel/UCjFaPUcJU1vwk193mnW_w1w">Modern Vintage Gamer</a></li>
    <li><a href="https://www.youtube.com/channel/UCkVdb9Yr8fc05_VbAVfskCA">Matthew Colville</a></li>
    <li><a href="https://www.youtube.com/channel/UCnbvPS_rXp4PC21PG2k1UVg">Gaming Historian</a></li>
    <li><a href="https://www.youtube.com/channel/UCoNTMWgGuXtGPLv9UeJZwBw">Living Big in a Tiny House</a></li>
    <li><a href="https://www.youtube.com/channel/UCsaGKqPZnGp_7N80hcHySGQ">Tasting History</a></li>
    <li><a href="https://www.youtube.com/channel/UCpvtp7mH0Cdq8FQUxcjDq0Q">My Life in Gaming</a></li>
    <li><a href="https://www.youtube.com/channel/UCu9ArHUJZadlhwt3Jt0tqgA">The Educated Barfly</a></li>
    <li><a href="https://www.youtube.com/channel/UCv_vLHiWVBh_FR9vbeuiY-A">Historia Civilis</a></li>
    <li><a href="https://www.youtube.com/channel/UCy0tKL1T7wFoYcxCe0xjN6Q">Technology Connections</a></li>
    <li><a href="https://www.youtube.com/channel/UC0woBco6Dgcxt0h8SwyyOmw">Megaprojects</a></li>
</ul>
<h3>Unsorted links</h3>
<ul>
    <li><a href="https://www.smegusa.com/50s-retro-style">Smeg</a> - Retro inspired kitchen appliances</li>
    <li><a href="https://www.red-dot.org">Red Dot</a> - Design awards</li>
    <li><a href="http://columbiagames.com/cgi-bin/query/harn/cfg/single.cfg?product_id=5001">Harn</a> - Medieval fantasy setting</li>
    <li><a href="https://www.desktodirtbag.com/most-scenic-drives-in-the-usa">Desk To Dirt Bag</a> - 15 scenic drives</li>
    <li><a href="https://scenicbyways.info">Scenic Byways</a> - Scenic drives based on books and national/state designations</li>
    <li><a href="https://aschmann.net/AmEng">North American English Dialects</a></li>
    <li><a href="https://www.communitywalk.com">Community Walk</a></li>
    <li><a href="https://pressofatlanticcity.com/news/the-complex-life-of-charles-k-landis/article_5d926824-f0b9-5a91-aa8d-ecbe245b45cd.html#11">Press of Atlantic City</a> - Charles K. Landis</li>
    <li><a href="https://docs.google.com/document/d/1VKH1h5-GccMZyTx-yc5Np1-E_g4lswxAUyDAAeDuuZw/edit">Govenment Generator</a> - Generate government types for RPG games (G-Sheets)</li>
</ul>
`;

module.exports = {
    name: name,
    content: content,
};