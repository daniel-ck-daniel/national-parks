const parks = [
  {
    id: 'rocky-mountain',
    name: 'Rocky Mountain',
    state: 'Colorado',
    driveHours: 1.5,
    driveMiles: 70,
    rating: 4.8,
    bestMonths: 'June-September',
    shortDescription: 'Alpine peaks, elk, wildflowers, and stunning mountain vistas right in your backyard.',
    fullDescription: 'Rocky Mountain National Park offers 415 square miles of pristine wilderness with over 300 miles of trails. Trail Ridge Road reaches 12,183 feet, providing access to tundra ecosystems. Wildlife includes elk, bighorn sheep, and moose. The park features 150 lakes and dramatic granite peaks.',
    activityLevel: 'moderate',
    activities: ['Hiking', 'Wildlife Viewing', 'Scenic Drives', 'Photography', 'Camping'],
    itinerary: [
      'Arrive early, drive Trail Ridge Road, hike Emerald Lake Trail (3.6 mi)',
      'Sunrise at Bear Lake, hike Sky Pond (8.5 mi), explore Wild Basin',
      'Summit a 14er (Longs Peak if experienced) or do easier Alpine Ridge Trail',
      'Moraine Park for elk viewing, Alberta Falls hike, explore Estes Park'
    ],
    gear: ['Layers for altitude', 'Hiking boots', 'Bear spray', 'Water filter', 'Trekking poles', 'Headlamp', 'First aid kit', 'Sunscreen & sunglasses'],
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80',
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80'
    ],
    visited: false
  },
  {
    id: 'mesa-verde',
    name: 'Mesa Verde',
    state: 'Colorado',
    driveHours: 6,
    driveMiles: 385,
    rating: 4.7,
    bestMonths: 'April-October',
    shortDescription: 'Ancient cliff dwellings and Puebloan ruins nestled in canyon alcoves.',
    fullDescription: 'Mesa Verde preserves over 5,000 archaeological sites including 600 cliff dwellings built by Ancestral Puebloans. Cliff Palace is the largest with 150 rooms. The park offers ranger-guided tours into dwellings and a museum with extensive artifacts. Petroglyphs and mesa-top villages showcase 700+ years of habitation.',
    activityLevel: 'chill',
    activities: ['Guided Tours', 'Archaeology', 'Photography', 'Scenic Drives', 'Museum'],
    itinerary: [
      'Visitor center, Chapin Mesa museum, tour Cliff Palace and Balcony House',
      'Wetherill Mesa tours, Long House, Step House',
      'Mesa Top Loop Drive, Sun Temple, petroglyph sites',
      'Hiking Petroglyph Point Trail, explore Spruce Tree House'
    ],
    gear: ['Comfortable walking shoes', 'Sun protection', 'Camera', 'Water bottles', 'Light jacket', 'Binoculars'],
    images: [
      'https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=800&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80'
    ],
    visited: false
  },
  {
    id: 'great-sand-dunes',
    name: 'Great Sand Dunes',
    state: 'Colorado',
    driveHours: 3.5,
    driveMiles: 235,
    rating: 4.8,
    bestMonths: 'May-June, September',
    shortDescription: 'North America\'s tallest sand dunes backed by alpine peaks.',
    fullDescription: 'Great Sand Dunes features 30 square miles of dunes reaching 750 feet tall. Medano Creek flows seasonally at the dune base, creating a beach-like atmosphere. The preserve includes alpine forests, wetlands, and tundra. Sandboarding and sand sledding are popular activities.',
    activityLevel: 'moderate',
    activities: ['Sandboarding', 'Hiking', 'Stargazing', 'Photography', 'Wading in Medano Creek'],
    itinerary: [
      'Hike High Dune (3 mi) or Star Dune summit, wade Medano Creek',
      'Sandboarding/sledding, explore dune field',
      'Drive Medano Pass Primitive Road (4WD), hike Mosca Pass Trail',
      'Sunrise photography, visit Zapata Falls, stargazing at night'
    ],
    gear: ['Sandboard/sled (rentable nearby)', 'Gaiters', 'Sunscreen', 'Plenty of water', 'Closed-toe shoes', 'Trekking poles', 'Star chart'],
    images: [
      'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80',
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80',
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80'
    ],
    visited: false
  },
  {
    id: 'black-canyon',
    name: 'Black Canyon of the Gunnison',
    state: 'Colorado',
    driveHours: 4.5,
    driveMiles: 250,
    rating: 4.8,
    bestMonths: 'May-October',
    shortDescription: 'Dramatic narrow gorge with sheer 2,000-foot black granite walls.',
    fullDescription: 'Black Canyon features some of the steepest cliffs and oldest rock in North America. The Gunnison River carved this 2,000+ foot deep gorge through Precambrian rock. Painted Wall is Colorado\'s tallest cliff at 2,250 feet. The canyon is so narrow that some areas receive only 33 minutes of sunlight per day.',
    activityLevel: 'chill',
    activities: ['Scenic Overlooks', 'Photography', 'Rock Climbing (advanced)', 'Fishing', 'Stargazing'],
    itinerary: [
      'South Rim Drive, Gunnison Point, Painted Wall View',
      'Hike Rim Rock Trail, Warner Point, explore visitor center',
      'North Rim Drive (more remote), excursion Point, Green Mountain Trail',
      'Sunrise/sunset photography, East Portal for fishing access'
    ],
    gear: ['Camera with telephoto lens', 'Binoculars', 'Sturdy shoes', 'Layers', 'Tripod for photography'],
    visited: false
  },
  {
    id: 'arches',
    name: 'Arches',
    state: 'Utah',
    driveHours: 5.5,
    driveMiles: 350,
    rating: 4.8,
    bestMonths: 'March-May, September-October',
    shortDescription: 'Over 2,000 natural stone arches in red rock desert landscape.',
    fullDescription: 'Arches contains the world\'s largest concentration of natural stone arches with over 2,000 catalogued. Delicate Arch is Utah\'s iconic symbol. The park features balanced rocks, fins, and pinnacles formed by erosion of Entrada sandstone. Landscape Arch spans 290 feet.',
    activityLevel: 'moderate',
    activities: ['Hiking', 'Photography', 'Scenic Drives', 'Rock Scrambling', 'Stargazing'],
    itinerary: [
      'Early start to Devils Garden (7.2 mi), see Landscape Arch & Double O Arch',
      'Delicate Arch hike at sunset (3 mi), Windows Section',
      'Fiery Furnace guided tour (permit required), Sand Dune Arch',
      'Park Avenue Trail, Balanced Rock, Courthouse Towers viewpoint'
    ],
    gear: ['Hiking boots', 'Sun protection', '3+ liters water per person', 'Trekking poles', 'Headlamp', 'Camera', 'Microspikes (winter)'],
    images: [
      'https://images.unsplash.com/photo-1434394673726-e8232a5903b4?w=800&q=80',
      'https://images.unsplash.com/photo-1531163761983-e036fc20c8d4?w=800&q=80',
      'https://images.unsplash.com/photo-1484804959297-65e7c19d7c9f?w=800&q=80'
    ],
    visited: false
  },
  {
    id: 'canyonlands',
    name: 'Canyonlands',
    state: 'Utah',
    driveHours: 5.5,
    driveMiles: 340,
    rating: 4.8,
    bestMonths: 'March-May, September-October',
    shortDescription: 'Vast desert wilderness carved by the Colorado River into countless canyons.',
    fullDescription: 'Canyonlands is Utah\'s largest national park, divided into four districts by the Colorado and Green Rivers. Island in the Sky offers expansive mesa-top views. The Needles features colorful spires and backcountry trails. The Maze is one of the most remote areas in the US. Dramatic overlooks reveal 1,000+ foot drops.',
    activityLevel: 'moderate',
    activities: ['Hiking', '4WD Roads', 'Mountain Biking', 'Backpacking', 'Photography'],
    itinerary: [
      'Island in the Sky: Mesa Arch sunrise, Grand View Point, Upheaval Dome',
      'White Rim Road overlook, hike Syncline Loop or Neck Spring Trail',
      'Drive to The Needles district, hike Chesler Park Loop (11 mi)',
      'Cave Spring Trail, Newspaper Rock, sunset at Green River Overlook'
    ],
    gear: ['4WD vehicle for backcountry', 'Hiking boots', 'Loads of water', 'GPS/maps', 'Camping gear', 'First aid', 'Repair kit for vehicle'],
    visited: false
  },
  {
    id: 'capitol-reef',
    name: 'Capitol Reef',
    state: 'Utah',
    driveHours: 6,
    driveMiles: 380,
    rating: 4.8,
    bestMonths: 'April-May, September-October',
    shortDescription: 'Hidden gem with colorful cliffs, canyons, and historic orchards.',
    fullDescription: 'Capitol Reef showcases the Waterpocket Fold, a 100-mile wrinkle in the Earth\'s crust. The park features towering cliffs, hidden arches, and narrow slot canyons. Historic Fruita orchards offer fruit picking in season. Petroglyphs from Fremont culture line the cliffs. Cathedral Valley contains massive monoliths.',
    activityLevel: 'moderate',
    activities: ['Hiking', 'Scenic Drives', 'Fruit Picking', 'Petroglyphs', 'Photography'],
    itinerary: [
      'Scenic Drive, Capitol Gorge Trail, Hickman Bridge hike (1.8 mi)',
      'Grand Wash Trail, Cassidy Arch, pick fruit in Fruita orchards',
      'Cathedral Valley Loop (4WD recommended), Temple of the Sun',
      'Sunset Point, Goosenecks Overlook, Cohab Canyon Trail'
    ],
    gear: ['Hiking boots', 'Sun protection', 'Water', 'Fruit picking bag', 'Camera', 'Layers'],
    visited: false
  },
  {
    id: 'bryce-canyon',
    name: 'Bryce Canyon',
    state: 'Utah',
    driveHours: 7,
    driveMiles: 450,
    rating: 4.8,
    bestMonths: 'April-May, September-October',
    shortDescription: 'Otherworldly hoodoos and natural amphitheaters in brilliant orange and red.',
    fullDescription: 'Bryce Canyon contains the world\'s largest collection of hoodoos—irregular rock columns. The park features a series of natural amphitheaters with vibrant red, orange, and white rock formations. Rim elevations reach 9,000 feet, providing cooler temperatures and different ecosystems. Exceptional stargazing due to dark skies.',
    activityLevel: 'moderate',
    activities: ['Hiking', 'Photography', 'Stargazing', 'Scenic Drives', 'Horseback Riding'],
    itinerary: [
      'Sunrise at Bryce Point, Queens/Navajo Loop (2.9 mi), Wall Street',
      'Fairyland Loop (8 mi) or Peek-a-boo Loop, Sunset Point',
      'Scenic Drive to Rainbow Point, Bristlecone Loop Trail',
      'Mossy Cave Trail, stargazing ranger program'
    ],
    gear: ['Hiking boots', 'Layers (cooler temps)', 'Trekking poles', 'Camera', 'Headlamp', 'Sunglasses', 'Star chart'],
    visited: false
  },
  {
    id: 'zion',
    name: 'Zion',
    state: 'Utah',
    driveHours: 7.5,
    driveMiles: 500,
    rating: 4.8,
    bestMonths: 'March-May, September-November',
    shortDescription: 'Towering red cliffs, slot canyons, and the iconic Angels Landing hike.',
    fullDescription: 'Zion features massive sandstone cliffs rising 2,000 feet above the valley floor. The Virgin River carved the 15-mile-long Zion Canyon. Angels Landing offers thrilling chain-assisted hiking. The Narrows allows wading through a river canyon with walls 1,000 feet tall. The park has five life zones from desert to forest.',
    activityLevel: 'intense',
    activities: ['Hiking', 'Canyoneering', 'Rock Climbing', 'Wading', 'Photography'],
    itinerary: [
      'Early shuttle to Angels Landing (5.4 mi, permit required), Emerald Pools',
      'The Narrows from bottom up (wade upriver as far as comfortable)',
      'Observation Point via East Mesa Trail (8 mi), or Canyon Overlook',
      'Pa\'rus Trail, Weeping Rock, sunset at Watchman Trail'
    ],
    gear: ['Hiking boots', 'Water shoes/neoprene socks for Narrows', 'Trekking poles', 'Dry bag', 'Canyoneering gear (if technical routes)', 'Permit for Angels Landing'],
    images: [
      'https://images.unsplash.com/photo-1508963493744-76fce69379c0?w=800&q=80',
      'https://images.unsplash.com/photo-1475940043906-43f5dab1b5ae?w=800&q=80',
      'https://images.unsplash.com/photo-1504870712357-65ea720d6078?w=800&q=80'
    ],
    visited: false
  },
  {
    id: 'grand-canyon',
    name: 'Grand Canyon',
    state: 'Arizona',
    driveHours: 10,
    driveMiles: 650,
    rating: 4.8,
    bestMonths: 'March-May, September-November',
    shortDescription: 'One of the world\'s most spectacular geological wonders—277 miles of canyon.',
    fullDescription: 'The Grand Canyon is 277 miles long, up to 18 miles wide, and over a mile deep. The Colorado River carved through nearly 2 billion years of geological history. The South Rim is most accessible year-round. North Rim offers solitude at higher elevation. Hiking to the river and back in one day is dangerous—most visitors explore rim trails.',
    activityLevel: 'moderate',
    activities: ['Hiking', 'Scenic Overlooks', 'Mule Rides', 'River Rafting', 'Photography'],
    itinerary: [
      'South Rim: Mather Point sunrise, Bright Angel Trail to 3-Mile Resthouse',
      'Hermit Road (shuttle/bike), Hopi Point, Mohave Point, Hermits Rest',
      'South Kaibab Trail to Ooh Aah Point, Desert View Watchtower',
      'Rim Trail sections, sunset at Yavapai Point, visit Grand Canyon Village'
    ],
    gear: ['Hiking boots', 'Trekking poles', 'Layers', 'Lots of water', 'Salty snacks', 'Hat & sunglasses', 'Camera with wide lens'],
    images: [
      'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=800&q=80'
    ],
    visited: false
  },
  {
    id: 'petrified-forest',
    name: 'Petrified Forest',
    state: 'Arizona',
    driveHours: 8.5,
    driveMiles: 550,
    rating: 4.6,
    bestMonths: 'March-May, September-November',
    shortDescription: 'Ancient petrified wood, painted desert badlands, and petroglyphs.',
    fullDescription: 'Petrified Forest contains one of the world\'s largest concentrations of petrified wood dating back 225 million years. The Painted Desert section features colorful badlands. Over 600 archaeological sites include Ancestral Puebloan dwellings. Newspaper Rock displays petroglyphs. The park contains Late Triassic fossils.',
    activityLevel: 'chill',
    activities: ['Scenic Drives', 'Short Hikes', 'Petroglyphs', 'Fossil Viewing', 'Photography'],
    itinerary: [
      'North entrance: Painted Desert overlooks, Puerco Pueblo ruins',
      'Newspaper Rock petroglyphs, Blue Mesa Trail (1 mi loop)',
      'Crystal Forest, Giant Logs Trail, Long Logs Trail',
      'Explore wilderness area, Agate House backpacking'
    ],
    gear: ['Comfortable shoes', 'Sun protection', 'Water', 'Camera', 'Wide-brim hat', 'Light layers'],
    visited: false
  },
  {
    id: 'saguaro',
    name: 'Saguaro',
    state: 'Arizona',
    driveHours: 10,
    driveMiles: 620,
    rating: 4.7,
    bestMonths: 'November-April',
    shortDescription: 'Iconic saguaro cacti forests in the Sonoran Desert.',
    fullDescription: 'Saguaro protects giant saguaro cacti that can live 200 years and grow over 40 feet tall. The park has two districts flanking Tucson. Rincon Mountain District features backcountry trails up to 8,000 feet. Tucson Mountain District offers easier desert hikes. Spring wildflower blooms are spectacular. Desert sunsets are stunning.',
    activityLevel: 'chill',
    activities: ['Hiking', 'Photography', 'Wildlife Viewing', 'Scenic Drives', 'Desert Ecology'],
    itinerary: [
      'West district: Valley View Overlook Trail, Signal Hill petroglyphs',
      'East district: Cactus Forest Loop Drive, Freeman Homestead Trail',
      'Sunrise hike to Wasson Peak (8 mi), or easier Hugh Norris Trail section',
      'Desert Discovery Nature Trail, sunset at Gates Pass'
    ],
    gear: ['Hiking boots', 'Sun protection', 'Lots of water', 'Hat', 'Light layers', 'Camera', 'First aid for cactus spines'],
    visited: false
  },
  {
    id: 'guadalupe-mountains',
    name: 'Guadalupe Mountains',
    state: 'Texas',
    driveHours: 9,
    driveMiles: 560,
    rating: 4.7,
    bestMonths: 'October-November, March-April',
    shortDescription: 'Texas\'s highest peak and dramatic ancient fossil reef.',
    fullDescription: 'Guadalupe Mountains contains Texas\'s four highest peaks, including Guadalupe Peak at 8,751 feet. The park preserves an ancient Permian fossil reef. McKittrick Canyon offers stunning fall foliage (rare for Texas). Over 80 miles of trails range from easy to strenuous. Remote and uncrowded.',
    activityLevel: 'intense',
    activities: ['Hiking', 'Backpacking', 'Peak Bagging', 'Fall Foliage', 'Geology'],
    itinerary: [
      'Hike Guadalupe Peak (8.4 mi, 3,000 ft gain) for sunrise',
      'McKittrick Canyon Trail for fall colors, Pratt Cabin',
      'Devil\'s Hall Trail (4.2 mi), explore Smith Spring Loop',
      'Backcountry camping, stargazing (darkest skies in Texas)'
    ],
    gear: ['Sturdy hiking boots', 'Trekking poles', 'Layers for altitude', 'Lots of water', 'Headlamp', 'Tent', 'Cold weather gear (winter)'],
    visited: false
  },
  {
    id: 'carlsbad-caverns',
    name: 'Carlsbad Caverns',
    state: 'New Mexico',
    driveHours: 8.5,
    driveMiles: 540,
    rating: 4.7,
    bestMonths: 'Year-round (caves stable temp)',
    shortDescription: 'Massive underground chambers and spectacular limestone formations.',
    fullDescription: 'Carlsbad Caverns features over 119 caves formed by sulfuric acid dissolution. The Big Room is the largest single cave chamber in North America at 8.2 acres. Formations include stalactites, stalagmites, and rare helictites. Bat flight programs show 400,000 Brazilian free-tailed bats emerging at dusk. Constant 56°F underground.',
    activityLevel: 'chill',
    activities: ['Cave Tours', 'Bat Flight Program', 'Photography', 'Ranger Programs', 'Geology'],
    itinerary: [
      'Natural Entrance route into Big Room (self-guided, 3+ hours)',
      'King\'s Palace guided tour, explore backcountry caves (permit required)',
      'Bat flight program at amphitheater (May-October)',
      'Slaughter Canyon Cave tour (strenuous), Rattlesnake Springs birding'
    ],
    gear: ['Light jacket', 'Sturdy shoes (cave floors slippery)', 'Water', 'Camera (no flash)', 'Flashlight for Natural Entrance'],
    visited: false
  },
  {
    id: 'white-sands',
    name: 'White Sands',
    state: 'New Mexico',
    driveHours: 7.5,
    driveMiles: 470,
    rating: 4.8,
    bestMonths: 'October-April',
    shortDescription: 'Brilliant white gypsum sand dunes—the world\'s largest gypsum dunefield.',
    fullDescription: 'White Sands contains 275 square miles of pure white gypsum sand dunes. The landscape shifts constantly with winds. Dunes reach 60 feet tall. The area was used for missile testing, creating unique historical context. Full moon hikes are offered monthly. Sledding down dunes is popular.',
    activityLevel: 'chill',
    activities: ['Sand Sledding', 'Photography', 'Hiking', 'Sunset Viewing', 'Full Moon Hikes'],
    itinerary: [
      'Dunes Drive, hike Alkali Flat Trail (5 mi, backcountry experience)',
      'Interdune Boardwalk, sand sledding, explore dunefield',
      'Sunset photography, ranger program',
      'Full moon hike (if scheduled), plaster play area for kids'
    ],
    gear: ['Sand sleds', 'Sunscreen', 'Sunglasses', 'Closed-toe shoes', 'Lots of water', 'Camera', 'White balance card for photos'],
    visited: false
  },
  {
    id: 'big-bend',
    name: 'Big Bend',
    state: 'Texas',
    driveHours: 13,
    driveMiles: 850,
    rating: 4.8,
    bestMonths: 'November-March',
    shortDescription: 'Remote desert wilderness, Rio Grande canyons, and the Chisos Mountains.',
    fullDescription: 'Big Bend is one of the largest, most remote parks in the lower 48. The Rio Grande carved spectacular canyons including Santa Elena with 1,500-foot walls. Chisos Mountains offer forested relief from desert. Over 450 bird species. Incredibly dark skies for stargazing. Summer temps exceed 110°F—visit in winter.',
    activityLevel: 'intense',
    activities: ['Backpacking', 'River Trips', 'Hiking', 'Birding', 'Stargazing'],
    itinerary: [
      'Drive Ross Maxwell Scenic Drive, Santa Elena Canyon Trail',
      'Chisos Basin: Window Trail (5.2 mi), Lost Mine Trail at sunrise',
      'South Rim backpacking (13+ mi) or day hike to Boot Canyon',
      'Hot springs historic site, Boquillas Canyon, Rio Grande Village'
    ],
    gear: ['Backpacking gear', 'Water filter', 'Desert clothing', 'Trekking poles', 'Navigation', 'First aid', 'Bear canister', 'Lots of water capacity'],
    visited: false
  },
  {
    id: 'yellowstone',
    name: 'Yellowstone',
    state: 'Wyoming, Montana, Idaho',
    driveHours: 9,
    driveMiles: 560,
    rating: 4.7,
    bestMonths: 'May-June, September',
    shortDescription: 'World\'s first national park with geysers, hot springs, and abundant wildlife.',
    fullDescription: 'Yellowstone sits atop a supervolcano with over 10,000 hydrothermal features including Old Faithful. The park has more geysers than anywhere else on Earth. Wildlife includes grizzly bears, wolves, bison, and elk. Grand Canyon of the Yellowstone features dramatic waterfalls. Yellowstone Lake is the largest high-elevation lake in North America.',
    activityLevel: 'moderate',
    activities: ['Geyser Viewing', 'Wildlife Watching', 'Hiking', 'Photography', 'Hot Springs'],
    itinerary: [
      'Old Faithful area: geyser basins, Morning Glory Pool, Grand Prismatic Spring',
      'Grand Canyon of Yellowstone: Artist Point, Uncle Tom\'s Trail',
      'Lamar Valley for wildlife (bison, wolves, bears), Tower Fall',
      'Norris Geyser Basin, Mammoth Hot Springs terraces'
    ],
    gear: ['Bear spray', 'Binoculars', 'Layers', 'Hiking boots', 'Water', 'Camera with telephoto', 'First aid'],
    images: [
      'https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800&q=80',
      'https://images.unsplash.com/photo-1591382386627-349b692688ff?w=800&q=80',
      'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=800&q=80'
    ],
    visited: false
  },
  {
    id: 'grand-teton',
    name: 'Grand Teton',
    state: 'Wyoming',
    driveHours: 9,
    driveMiles: 575,
    rating: 4.8,
    bestMonths: 'June-September',
    shortDescription: 'Jagged alpine peaks rising dramatically above Jackson Hole valley.',
    fullDescription: 'Grand Teton features the iconic Teton Range rising 7,000 feet above the valley with no foothills. Grand Teton summit reaches 13,775 feet. The park contains pristine alpine lakes, glaciers, and abundant wildlife. Snake River winds through the valley. Excellent mountaineering, backpacking, and wildlife photography.',
    activityLevel: 'intense',
    activities: ['Mountaineering', 'Backpacking', 'Wildlife Viewing', 'Photography', 'Scenic Drives'],
    itinerary: [
      'Jenny Lake: boat shuttle, hike to Hidden Falls & Inspiration Point',
      'Cascade Canyon Trail (9+ mi), or Paintbrush-Cascade Loop (19 mi)',
      'Sunrise at Schwabacher Landing, Mormon Row historic barns',
      'Taggart Lake & Bradley Lake loop, sunset at Oxbow Bend'
    ],
    gear: ['Hiking boots', 'Bear spray', 'Layers', 'Trekking poles', 'Backpacking gear', 'Water filter', 'Ice axe (early season)'],
    visited: false
  },
  {
    id: 'glacier',
    name: 'Glacier',
    state: 'Montana',
    driveHours: 14,
    driveMiles: 920,
    rating: 4.8,
    bestMonths: 'July-September',
    shortDescription: 'Pristine wilderness with 26 glaciers, alpine meadows, and Going-to-the-Sun Road.',
    fullDescription: 'Glacier contains over 1 million acres of wilderness with 26 named glaciers (down from 150 in 1850). Going-to-the-Sun Road is an engineering marvel crossing the Continental Divide. Over 700 miles of trails. Wildlife includes grizzlies, mountain goats, and wolverines. Waterton-Glacier International Peace Park with Canada.',
    activityLevel: 'intense',
    activities: ['Backpacking', 'Hiking', 'Scenic Drives', 'Wildlife Viewing', 'Photography'],
    itinerary: [
      'Drive Going-to-the-Sun Road, hike Highline Trail (11+ mi)',
      'Hidden Lake Overlook, Avalanche Lake Trail (6 mi)',
      'Many Glacier area: Grinnell Glacier hike (10.6 mi)',
      'Two Medicine area, Iceberg Lake Trail, sunrise at Lake McDonald'
    ],
    gear: ['Bear spray (essential)', 'Layers', 'Rain gear', 'Hiking boots', 'Trekking poles', 'Backpacking gear', 'Water filter', 'Navigation'],
    visited: false
  },
  {
    id: 'theodore-roosevelt',
    name: 'Theodore Roosevelt',
    state: 'North Dakota',
    driveHours: 11,
    driveMiles: 680,
    rating: 4.7,
    bestMonths: 'May-June, September-October',
    shortDescription: 'Badlands, wild horses, and the landscape that inspired a president.',
    fullDescription: 'Theodore Roosevelt preserves the rugged badlands that inspired TR\'s conservation ethic. The park has three units with colorful layered rock formations. Wild horses and bison roam freely. The Little Missouri River winds through the landscape. Scenic drives and hiking trails showcase the dramatic terrain.',
    activityLevel: 'chill',
    activities: ['Scenic Drives', 'Wildlife Viewing', 'Hiking', 'Photography', 'History'],
    itinerary: [
      'South Unit: Scenic Loop Drive, Wind Canyon Trail, Coal Vein Trail',
      'Painted Canyon overlook, hike Maah Daah Hey Trail section',
      'North Unit (more remote): River Bend Overlook, Caprock Coulee',
      'Wildlife watching for bison and wild horses, sunset at Buck Hill'
    ],
    gear: ['Hiking boots', 'Binoculars', 'Layers (temp swings)', 'Water', 'Camera', 'Sun protection'],
    visited: false
  },
  {
    id: 'badlands',
    name: 'Badlands',
    state: 'South Dakota',
    driveHours: 7,
    driveMiles: 420,
    rating: 4.7,
    bestMonths: 'May-June, September-October',
    shortDescription: 'Striking layered rock formations and fossil beds in the Great Plains.',
    fullDescription: 'Badlands features sharply eroded buttes, pinnacles, and spires. The park contains one of the world\'s richest fossil beds with species dating 75-25 million years ago. Badlands Loop Road provides access to overlooks and trails. Bison, bighorn sheep, and prairie dogs are common. Stargazing is exceptional.',
    activityLevel: 'chill',
    activities: ['Scenic Drives', 'Fossil Viewing', 'Short Hikes', 'Photography', 'Stargazing'],
    itinerary: [
      'Badlands Loop Road: Door & Window Trails, Notch Trail (1.5 mi)',
      'Castle Trail (10 mi, longer hike option), Fossil Exhibit Trail',
      'Sage Creek Rim Road for bison viewing (unpaved)',
      'Sunrise at Pinnacles Overlook, sunset at Yellow Mounds, night stargazing'
    ],
    gear: ['Sturdy shoes', 'Sun protection', 'Water', 'Binoculars', 'Camera', 'Layers'],
    visited: false
  },
  {
    id: 'wind-cave',
    name: 'Wind Cave',
    state: 'South Dakota',
    driveHours: 7.5,
    driveMiles: 440,
    rating: 4.6,
    bestMonths: 'Year-round (cave stable temp)',
    shortDescription: 'Complex cave system famous for rare boxwork formations and prairie wildlife.',
    fullDescription: 'Wind Cave is one of the longest caves in the world with 154+ miles mapped. It contains 95% of the world\'s boxwork formations—delicate calcite structures. Cave tours range from easy to strenuous. Above ground, the park protects mixed-grass prairie with bison, elk, and prairie dogs. Constant 54°F in cave.',
    activityLevel: 'chill',
    activities: ['Cave Tours', 'Wildlife Viewing', 'Hiking', 'Prairie Ecology', 'Photography'],
    itinerary: [
      'Natural Entrance Tour (moderate, 1.25 hours) or Fairgrounds Tour (easy)',
      'Wild Cave Tour (advanced, 4 hours of crawling) if adventurous',
      'Prairie hiking: Rankin Ridge Trail, Elk Mountain Trail',
      'Wildlife Loop Road for bison viewing, Cold Brook Canyon Trail'
    ],
    gear: ['Light jacket for cave', 'Sturdy shoes', 'Water', 'Layers for surface', 'Binoculars', 'Camera'],
    visited: false
  },
  {
    id: 'voyageurs',
    name: 'Voyageurs',
    state: 'Minnesota',
    driveHours: 16,
    driveMiles: 1050,
    rating: 4.7,
    bestMonths: 'June-August',
    shortDescription: 'Water-based wilderness park with pristine lakes and northern forests.',
    fullDescription: 'Voyageurs is a water-based park with over 218,000 acres, 40% of which is water. Access to most of the park requires watercraft. The park features interconnected lakes, islands, and boreal forest. Excellent fishing, canoeing, and kayaking. Winter allows snowmobiling and cross-country skiing.',
    activityLevel: 'moderate',
    activities: ['Kayaking', 'Canoeing', 'Fishing', 'Camping', 'Boating'],
    itinerary: [
      'Rainy Lake Visitor Center, rent kayak/canoe, explore Rainy Lake',
      'Paddle to Ellsworth Rock Gardens, Kettle Falls area',
      'Cruiser Lake Trail (9.5 mi loop), fishing for walleye',
      'Explore islands, camp on backcountry sites, northern lights viewing'
    ],
    gear: ['Kayak/canoe (or rent)', 'PFD', 'Dry bags', 'Fishing gear', 'Camping equipment', 'Water filter', 'Bug spray (mosquitoes)'],
    visited: false
  },
  {
    id: 'isle-royale',
    name: 'Isle Royale',
    state: 'Michigan',
    driveHours: 20,
    driveMiles: 1300,
    rating: 4.8,
    bestMonths: 'June-September',
    shortDescription: 'Remote island wilderness in Lake Superior accessible only by boat or seaplane.',
    fullDescription: 'Isle Royale is the least visited national park in the lower 48. The island is 45 miles long, surrounded by Lake Superior, and accessible only by ferry or seaplane. The park features 165 miles of trails, inland lakes, and rugged coastline. Wolves and moose populations are studied extensively. No vehicles allowed.',
    activityLevel: 'intense',
    activities: ['Backpacking', 'Kayaking', 'Fishing', 'Wildlife Study', 'Solitude'],
    itinerary: [
      'Ferry from Grand Portage, hike Greenstone Ridge Trail (40+ mi over 3-4 days)',
      'Alternative: shorter loops around Rock Harbor area',
      'Paddle to outer islands, explore shipwrecks',
      'Day hike to Suzy\'s Cave, Lookout Louise, Scoville Point'
    ],
    gear: ['Backpacking gear', 'Water filter', 'Bear-proof food storage', 'Layers/rain gear', 'Boots', 'Kayak (or rent)', 'Ferry tickets (book early)'],
    visited: false
  },
  {
    id: 'cuyahoga-valley',
    name: 'Cuyahoga Valley',
    state: 'Ohio',
    driveHours: 16,
    driveMiles: 1050,
    rating: 4.6,
    bestMonths: 'May-October',
    shortDescription: 'Green river valley with waterfalls, forests, and the scenic railroad.',
    fullDescription: 'Cuyahoga Valley preserves the rural landscape along the Cuyahoga River between Cleveland and Akron. The park features Brandywine Falls (65 feet), the Towpath Trail (part of the Ohio & Erie Canal), and the Cuyahoga Valley Scenic Railroad. Over 125 miles of trails. Bald eagles, beavers, and great blue herons.',
    activityLevel: 'chill',
    activities: ['Hiking', 'Biking', 'Scenic Railroad', 'Waterfalls', 'Canal History'],
    itinerary: [
      'Brandywine Falls Boardwalk, Ledges Trail (2.2 mi)',
      'Bike the Towpath Trail, ride the Cuyahoga Valley Scenic Railroad',
      'Blue Hen Falls, Buttermilk Falls, Beaver Marsh wildlife viewing',
      'Boston Store Visitor Center, historic sites along the canal'
    ],
    gear: ['Comfortable shoes', 'Bike (or rent)', 'Water', 'Camera', 'Light layers', 'Binoculars'],
    visited: false
  },
  {
    id: 'indiana-dunes',
    name: 'Indiana Dunes',
    state: 'Indiana',
    driveHours: 14,
    driveMiles: 900,
    rating: 4.5,
    bestMonths: 'May-September',
    shortDescription: 'Lakefront dunes, beaches, and diverse ecosystems along Lake Michigan.',
    fullDescription: 'Indiana Dunes features 15 miles of Lake Michigan shoreline with massive sand dunes. Mount Baldy is a migrating dune. The park contains diverse habitats including wetlands, prairies, and forests. Over 350 bird species recorded. Trails range from easy beach walks to challenging dune climbs.',
    activityLevel: 'chill',
    activities: ['Beach Time', 'Hiking', 'Birding', 'Swimming', 'Dune Climbing'],
    itinerary: [
      'West Beach, Mount Baldy (seasonal closures for safety), Dune Succession Trail',
      'Cowles Bog Trail (4.7 mi), explore diverse ecosystems',
      'Beach swimming, sunset over Lake Michigan',
      'Bailly Homestead, Chellberg Farm historic sites'
    ],
    gear: ['Beach gear', 'Swimsuit', 'Sunscreen', 'Water shoes', 'Hat', 'Binoculars', 'Camera'],
    visited: false
  },
  {
    id: 'mammoth-cave',
    name: 'Mammoth Cave',
    state: 'Kentucky',
    driveHours: 15,
    driveMiles: 970,
    rating: 4.6,
    bestMonths: 'Year-round (cave stable temp)',
    shortDescription: 'World\'s longest cave system with over 420 miles of mapped passages.',
    fullDescription: 'Mammoth Cave is the world\'s longest known cave system. The cave formed in limestone and features massive chambers, intricate passageways, and underground rivers. Tours range from easy walks to strenuous wild cave experiences. Above ground, the park protects forests and the Green River. Constant 54°F in cave.',
    activityLevel: 'chill',
    activities: ['Cave Tours', 'Hiking', 'Canoeing', 'History', 'Geology'],
    itinerary: [
      'Historic Tour (2 hours, easiest) or Domes & Dripstones Tour',
      'Wild Cave Tour (6 hours, crawling/climbing, advanced)',
      'Green River Bluffs Trail (4 mi), canoe the Green River',
      'Ranger programs, explore surface trails'
    ],
    gear: ['Light jacket for cave', 'Sturdy shoes (cave floors uneven)', 'Water', 'Headlamp for wild cave', 'Layers', 'Camera (no flash)'],
    visited: false
  },
  {
    id: 'hot-springs',
    name: 'Hot Springs',
    state: 'Arkansas',
    driveHours: 13,
    driveMiles: 820,
    rating: 4.5,
    bestMonths: 'Year-round',
    shortDescription: 'Historic bathhouses and thermal springs in a charming Ozark town.',
    fullDescription: 'Hot Springs is the smallest national park, located in downtown Hot Springs, Arkansas. The park preserves 47 hot springs and the historic Bathhouse Row. Fordyce Bathhouse is a museum. Buckstaff Bathhouse still offers traditional baths. Trails on Hot Springs Mountain and North Mountain offer views. The springs flow at 143°F.',
    activityLevel: 'chill',
    activities: ['Bathhouse Tours', 'Thermal Baths', 'Hiking', 'History', 'Architecture'],
    itinerary: [
      'Tour Fordyce Bathhouse Museum, explore Bathhouse Row architecture',
      'Traditional bath at Buckstaff Bathhouse (reservations recommended)',
      'Hike Sunset Trail (10 mi) or shorter Grand Promenade',
      'Visit Hot Springs Mountain Tower, explore downtown Hot Springs'
    ],
    gear: ['Comfortable walking shoes', 'Swimsuit for bath', 'Water', 'Camera', 'Light jacket'],
    visited: false
  },
  {
    id: 'gateway-arch',
    name: 'Gateway Arch',
    state: 'Missouri',
    driveHours: 11,
    driveMiles: 675,
    rating: 4.6,
    bestMonths: 'April-October',
    shortDescription: 'Iconic 630-foot steel arch symbolizing westward expansion.',
    fullDescription: 'Gateway Arch is the tallest man-made monument in the Western Hemisphere at 630 feet. Visitors can ride trams to the top for views over St. Louis and the Mississippi River. The park includes the Museum of Westward Expansion and Old Courthouse (Dred Scott case). Riverfront location with trails and views.',
    activityLevel: 'chill',
    activities: ['Arch Tram Ride', 'Museum', 'History', 'Riverfront Walks', 'Photography'],
    itinerary: [
      'Tram ride to top of Gateway Arch (book tickets early)',
      'Museum of Westward Expansion, watch documentary film',
      'Tour Old Courthouse (Dred Scott trial site)',
      'Riverfront walk, explore downtown St. Louis'
    ],
    gear: ['Comfortable shoes', 'Camera', 'Light layers', 'Tram tickets (advance purchase)'],
    visited: false
  },
  {
    id: 'acadia',
    name: 'Acadia',
    state: 'Maine',
    driveHours: 30,
    driveMiles: 2000,
    rating: 4.7,
    bestMonths: 'September-October (fall foliage)',
    shortDescription: 'Rugged coast, granite peaks, and stunning fall colors on Mount Desert Island.',
    fullDescription: 'Acadia spans Mount Desert Island and smaller islands along Maine\'s coast. Cadillac Mountain is the highest point on the Atlantic coast. The park features rocky beaches, forests, and 45 miles of historic carriage roads. Jordan Pond offers iconic views. Fall foliage is spectacular. Lobster and seafood abound.',
    activityLevel: 'moderate',
    activities: ['Hiking', 'Biking', 'Coastal Scenery', 'Sunrise Viewing', 'Fall Foliage'],
    itinerary: [
      'Sunrise on Cadillac Mountain (first in US), Precipice Trail (strenuous)',
      'Jordan Pond Path loop, carriage roads biking',
      'Sand Beach, Thunder Hole, Otter Cliff scenic drive',
      'Bass Harbor Head Lighthouse, evening lobster dinner'
    ],
    gear: ['Hiking boots', 'Layers', 'Rain gear', 'Bike (or rent)', 'Camera', 'Tide chart', 'Water'],
    visited: false
  },
  {
    id: 'shenandoah',
    name: 'Shenandoah',
    state: 'Virginia',
    driveHours: 22,
    driveMiles: 1450,
    rating: 4.7,
    bestMonths: 'October (fall), May-June',
    shortDescription: 'Blue Ridge Mountains with Skyline Drive and Appalachian Trail.',
    fullDescription: 'Shenandoah protects 200,000 acres of the Blue Ridge Mountains. Skyline Drive runs 105 miles through the park with 75 overlooks. Over 500 miles of trails including 101 miles of the Appalachian Trail. Waterfalls, wildlife, and wildflowers are highlights. Fall foliage draws crowds. Dark Hollow Falls is popular.',
    activityLevel: 'moderate',
    activities: ['Scenic Drives', 'Hiking', 'Waterfalls', 'Fall Foliage', 'Wildlife Viewing'],
    itinerary: [
      'Drive Skyline Drive north to south, stop at overlooks',
      'Hike Old Rag (9 mi, rock scrambling) or Dark Hollow Falls (1.4 mi)',
      'Hawksbill Summit (highest peak), Rapidan Camp (Hoover retreat)',
      'Appalachian Trail section, sunset at Stony Man'
    ],
    gear: ['Hiking boots', 'Layers', 'Water', 'Trekking poles', 'Camera', 'Bear bag'],
    visited: false
  },
  {
    id: 'congaree',
    name: 'Congaree',
    state: 'South Carolina',
    driveHours: 20,
    driveMiles: 1320,
    rating: 4.6,
    bestMonths: 'March-May, September-November',
    shortDescription: 'Old-growth bottomland hardwood forest and synchronous fireflies.',
    fullDescription: 'Congaree preserves the largest intact expanse of old-growth bottomland hardwood forest in the US. Bald cypress and tupelo trees tower overhead. The park floods regularly, creating a dynamic ecosystem. Synchronous fireflies display in May. Boardwalk trails and canoe trails allow exploration. Mosquitoes can be intense.',
    activityLevel: 'chill',
    activities: ['Boardwalk Hiking', 'Canoeing', 'Firefly Viewing', 'Birding', 'Photography'],
    itinerary: [
      'Boardwalk Loop (2.4 mi), explore old-growth forest',
      'Canoe Cedar Creek (15 mi trail, rentals available)',
      'Weston Lake Loop Trail, Kingsnake Trail',
      'Evening owl prowl or firefly viewing (May)'
    ],
    gear: ['Bug spray (essential)', 'Water shoes for canoeing', 'Water', 'Hat', 'Binoculars', 'Headlamp'],
    visited: false
  },
  {
    id: 'biscayne',
    name: 'Biscayne',
    state: 'Florida',
    driveHours: 26,
    driveMiles: 1750,
    rating: 4.6,
    bestMonths: 'December-April',
    shortDescription: 'Underwater coral reefs, mangroves, and islands in Biscayne Bay.',
    fullDescription: 'Biscayne is 95% water, protecting the northernmost Florida Keys coral reefs. The park includes mangrove shoreline, Biscayne Bay, and barrier islands. Excellent snorkeling, diving, and glass-bottom boat tours. Boca Chita Key has a historic lighthouse. Maritime Heritage Trail features shipwrecks. Paddling through mangrove tunnels is magical.',
    activityLevel: 'chill',
    activities: ['Snorkeling', 'Diving', 'Boating', 'Kayaking', 'Fishing'],
    itinerary: [
      'Glass-bottom boat tour to reef, snorkel Maritime Heritage Trail',
      'Kayak to Boca Chita Key, climb lighthouse',
      'Snorkel or dive at reef sites, explore mangrove tunnels',
      'Paddleboarding, fishing, sunset cruise'
    ],
    gear: ['Snorkel gear', 'Swimsuit', 'Sunscreen (reef-safe)', 'Kayak (or rent)', 'PFD', 'Dry bag', 'Water shoes'],
    visited: false
  },
  {
    id: 'everglades',
    name: 'Everglades',
    state: 'Florida',
    driveHours: 26,
    driveMiles: 1750,
    rating: 4.5,
    bestMonths: 'December-April',
    shortDescription: 'Vast wetland ecosystem teeming with alligators, birds, and mangroves.',
    fullDescription: 'Everglades is the largest subtropical wilderness in the US. The "River of Grass" flows slowly through sawgrass marshes. The park protects critical habitat for endangered species including Florida panther and manatee. Alligators and crocodiles coexist here. Excellent birding with over 360 species. Mosquitoes are intense in summer.',
    activityLevel: 'chill',
    activities: ['Wildlife Viewing', 'Airboat Tours', 'Kayaking', 'Birding', 'Tram Tours'],
    itinerary: [
      'Shark Valley: tram tour or bike the 15-mile loop, observation tower',
      'Anhinga Trail boardwalk for alligators, Royal Palm area',
      'Kayak Nine Mile Pond or Hell\'s Bay (backcountry)',
      'Flamingo area, sunset boat tour, stargazing'
    ],
    gear: ['Bug spray (essential)', 'Sunscreen', 'Hat', 'Water', 'Binoculars', 'Kayak (or rent)', 'Camera with zoom'],
    visited: false
  },
  {
    id: 'dry-tortugas',
    name: 'Dry Tortugas',
    state: 'Florida',
    driveHours: 28,
    driveMiles: 1850,
    rating: 4.8,
    bestMonths: 'Year-round',
    shortDescription: 'Remote island fort surrounded by crystal-clear waters and coral reefs.',
    fullDescription: 'Dry Tortugas is 70 miles west of Key West, accessible only by boat or seaplane. Fort Jefferson is a massive 19th-century fort on Garden Key. The park features pristine coral reefs, sea turtles, and tropical fish. Incredible snorkeling and diving. Camping is allowed (limited sites). No freshwater available—bring everything.',
    activityLevel: 'chill',
    activities: ['Snorkeling', 'Diving', 'Fort Tours', 'Camping', 'Birding'],
    itinerary: [
      'Ferry from Key West (2.5 hours), tour Fort Jefferson',
      'Snorkel around Garden Key, explore moat wall',
      'Dive deeper reefs, beach combing, bird watching',
      'Camp overnight (book ahead), sunrise/sunset photography'
    ],
    gear: ['Snorkel gear', 'Sunscreen', 'All food & water (nothing on island)', 'Camping gear', 'Swimsuit', 'Ferry tickets'],
    visited: false
  },
  {
    id: 'great-smoky-mountains',
    name: 'Great Smoky Mountains',
    state: 'Tennessee, North Carolina',
    driveHours: 18,
    driveMiles: 1200,
    rating: 4.7,
    bestMonths: 'October (fall), April-May (wildflowers)',
    shortDescription: 'Most visited national park with misty mountains, waterfalls, and wildlife.',
    fullDescription: 'Great Smoky Mountains is the most visited national park with over 12 million annual visitors. The park straddles Tennessee and North Carolina with 800+ miles of trails. Clingmans Dome is the highest peak at 6,643 feet. The park is renowned for biodiversity with 19,000+ documented species. Synchronous fireflies display in June.',
    activityLevel: 'moderate',
    activities: ['Hiking', 'Waterfalls', 'Wildlife Viewing', 'Fall Foliage', 'Historic Sites'],
    itinerary: [
      'Cades Cove Loop (11 mi drive, wildlife), Abrams Falls hike',
      'Alum Cave Trail to LeConte Lodge (11 mi round trip)',
      'Clingmans Dome, Laurel Falls, Grotto Falls',
      'Roaring Fork Motor Nature Trail, Elkmont fireflies (June)'
    ],
    gear: ['Hiking boots', 'Rain gear (frequent rain)', 'Layers', 'Bear bag', 'Water', 'Camera', 'Trekking poles'],
    visited: false
  },
  {
    id: 'new-river-gorge',
    name: 'New River Gorge',
    state: 'West Virginia',
    driveHours: 18,
    driveMiles: 1180,
    rating: 4.7,
    bestMonths: 'April-October',
    shortDescription: 'Dramatic river gorge with whitewater rafting and rock climbing.',
    fullDescription: 'New River Gorge is one of the newest national parks (2020). The New River carved a 1,000-foot-deep gorge through the Appalachian Plateau. The New River Gorge Bridge is an iconic 3,030-foot span. World-class rock climbing and whitewater rafting. Historic coal mining towns offer cultural history.',
    activityLevel: 'intense',
    activities: ['Rock Climbing', 'Whitewater Rafting', 'Hiking', 'Bridge Views', 'History'],
    itinerary: [
      'Canyon Rim Visitor Center, Long Point Trail (1.6 mi) for bridge views',
      'Whitewater rafting on Lower or Upper New River (book guide)',
      'Rock climbing at Endless Wall (over 1,500 routes) or guided climb',
      'Explore Thurmond ghost town, Sandstone Falls'
    ],
    gear: ['Climbing gear (or guided)', 'Rafting gear (provided by outfitters)', 'Hiking boots', 'Layers', 'Water', 'Camera'],
    visited: false
  },
  {
    id: 'redwood',
    name: 'Redwood',
    state: 'California',
    driveHours: 19,
    driveMiles: 1260,
    rating: 4.8,
    bestMonths: 'May-September',
    shortDescription: 'Ancient coast redwoods—the tallest trees on Earth.',
    fullDescription: 'Redwood National and State Parks preserve 45% of remaining old-growth coast redwoods. Hyperion, the world\'s tallest tree at 380 feet, grows here (location secret). The park features lush fern-filled forests, wild coastline, and Roosevelt elk. Hiking beneath 300-foot-tall trees is awe-inspiring.',
    activityLevel: 'moderate',
    activities: ['Hiking', 'Scenic Drives', 'Coastal Views', 'Elk Viewing', 'Photography'],
    itinerary: [
      'Lady Bird Johnson Grove (1.4 mi loop), Tall Trees Grove (permit)',
      'Fern Canyon (1 mi, 50-foot walls covered in ferns)',
      'James Irvine Trail to Gold Bluffs Beach (11 mi)',
      'Coastal Drive for ocean views, elk at Gold Bluffs Beach'
    ],
    gear: ['Hiking boots', 'Rain gear (coastal fog)', 'Layers', 'Water', 'Camera', 'Binoculars'],
    visited: false
  },
  {
    id: 'crater-lake',
    name: 'Crater Lake',
    state: 'Oregon',
    driveHours: 15,
    driveMiles: 1000,
    rating: 4.8,
    bestMonths: 'July-September',
    shortDescription: 'Deepest lake in the US with impossibly blue water in a volcanic crater.',
    fullDescription: 'Crater Lake formed 7,700 years ago when Mount Mazama collapsed. At 1,943 feet, it\'s the deepest lake in the US. The water is so pure it appears intensely blue. Wizard Island is a volcanic cinder cone in the lake. Rim Drive circles the lake with numerous viewpoints. Heavy snow buries the park in winter.',
    activityLevel: 'moderate',
    activities: ['Scenic Drives', 'Hiking', 'Boat Tours', 'Photography', 'Stargazing'],
    itinerary: [
      'Rim Drive (33 mi) with stops at Watchman Overlook, Cloudcap',
      'Hike Watchman Peak (1.6 mi), Garfield Peak (3.4 mi)',
      'Boat tour to Wizard Island (book early), swim in the lake',
      'Plaikni Falls Trail, Pinnacles Overlook, sunset at Rim Village'
    ],
    gear: ['Hiking boots', 'Layers (cooler at altitude)', 'Sunscreen', 'Water', 'Camera', 'Swimsuit'],
    visited: false
  },
  {
    id: 'north-cascades',
    name: 'North Cascades',
    state: 'Washington',
    driveHours: 17,
    driveMiles: 1130,
    rating: 4.8,
    bestMonths: 'July-September',
    shortDescription: 'Rugged alpine wilderness with jagged peaks and over 300 glaciers.',
    fullDescription: 'North Cascades contains over 300 glaciers and some of the most dramatic mountain terrain in the lower 48. The park is 93% designated wilderness. Jagged peaks, alpine lakes, and old-growth forests create stunning scenery. The North Cascades Highway (SR 20) provides access. Ross Lake and Lake Chelan offer water access.',
    activityLevel: 'intense',
    activities: ['Backpacking', 'Hiking', 'Mountaineering', 'Kayaking', 'Photography'],
    itinerary: [
      'Drive SR 20, hike Cascade Pass (7.4 mi) or Sahale Arm',
      'Diablo Lake overlook, Thunder Knob Trail (3.6 mi)',
      'Backpacking in Stehekin area (boat from Lake Chelan)',
      'Maple Pass Loop (7.2 mi), Blue Lake Trail'
    ],
    gear: ['Backpacking gear', 'Layers/rain gear', 'Hiking boots', 'Trekking poles', 'Bear canister', 'Water filter', 'Navigation'],
    visited: false
  },
  {
    id: 'olympic',
    name: 'Olympic',
    state: 'Washington',
    driveHours: 17,
    driveMiles: 1150,
    rating: 4.7,
    bestMonths: 'July-September',
    shortDescription: 'Diverse park with rainforests, rugged coast, and alpine peaks.',
    fullDescription: 'Olympic features three distinct ecosystems: temperate rainforest, wild Pacific coast, and glacier-capped mountains. Hoh Rain Forest receives 140+ inches of rain annually. The coast has sea stacks, tide pools, and driftwood beaches. Mount Olympus rises to 7,980 feet with glaciers. Elk, black bears, and sea otters.',
    activityLevel: 'moderate',
    activities: ['Rainforest Hiking', 'Beach Exploration', 'Tide Pooling', 'Backpacking', 'Wildlife Viewing'],
    itinerary: [
      'Hoh Rain Forest: Hall of Mosses (0.8 mi), Spruce Nature Trail',
      'Ruby Beach, Second Beach, tide pools at low tide',
      'Hurricane Ridge for alpine views, Klahhane Ridge Trail',
      'Sol Duc Falls (1.6 mi), hot springs soak nearby'
    ],
    gear: ['Rain gear (essential)', 'Hiking boots', 'Layers', 'Water', 'Tide chart', 'Binoculars', 'Bear canister (backcountry)'],
    visited: false
  },
  {
    id: 'mount-rainier',
    name: 'Mount Rainier',
    state: 'Washington',
    driveHours: 16,
    driveMiles: 1050,
    rating: 4.8,
    bestMonths: 'July-September',
    shortDescription: 'Iconic glaciated volcano with wildflower meadows and challenging climbing.',
    fullDescription: 'Mount Rainier is an active volcano rising 14,410 feet above sea level. The mountain has 26 named glaciers containing more glacial ice than all other Cascade volcanoes combined. Wildflower meadows explode with color in summer. Paradise is the snowiest place on Earth (1,122 inches in 1971-72). Climbing the summit requires technical skills.',
    activityLevel: 'intense',
    activities: ['Hiking', 'Mountaineering', 'Wildflowers', 'Photography', 'Scenic Drives'],
    itinerary: [
      'Paradise area: Skyline Trail (5.5 mi loop) for wildflowers and views',
      'Sunrise area: Burroughs Mountain Trail (7 mi)',
      'Spray Park or Wonderland Trail section (93 mi loop for multi-day)',
      'Grove of the Patriarchs (1.3 mi), Nisqually Vista'
    ],
    gear: ['Hiking boots', 'Layers', 'Trekking poles', 'Sunscreen', 'Water', 'Camera', 'Mountaineering gear for summit (guided recommended)'],
    visited: false
  },
  {
    id: 'lassen-volcanic',
    name: 'Lassen Volcanic',
    state: 'California',
    driveHours: 16,
    driveMiles: 1080,
    rating: 4.7,
    bestMonths: 'July-September',
    shortDescription: 'Active volcanic landscape with boiling mud pots and steaming fumaroles.',
    fullDescription: 'Lassen Volcanic features all four types of volcanoes: shield, composite, cinder cone, and plug dome. Lassen Peak last erupted in 1915. The park has hydrothermal areas with boiling springs, fumaroles, and mud pots. Bumpass Hell is the largest hydrothermal area. Alpine lakes, meadows, and forests offer diverse hiking.',
    activityLevel: 'moderate',
    activities: ['Hiking', 'Hydrothermal Features', 'Peak Bagging', 'Camping', 'Photography'],
    itinerary: [
      'Bumpass Hell Trail (3 mi) to see boiling mud pots and fumaroles',
      'Summit Lassen Peak (5 mi, 2,000 ft gain) for panoramic views',
      'Cinder Cone Trail (4 mi, strenuous volcanic climb)',
      'Manzanita Lake loop, Kings Creek Falls, Sulphur Works'
    ],
    gear: ['Hiking boots', 'Layers', 'Sun protection', 'Water', 'Trekking poles', 'Camera', 'First aid'],
    visited: false
  },
  {
    id: 'pinnacles',
    name: 'Pinnacles',
    state: 'California',
    driveHours: 14,
    driveMiles: 920,
    rating: 4.6,
    bestMonths: 'March-May, September-November',
    shortDescription: 'Volcanic spires, talus caves, and California condor spotting.',
    fullDescription: 'Pinnacles preserves the remains of an ancient volcano that has moved 195 miles along the San Andreas Fault. Towering rock spires offer world-class rock climbing. Talus caves formed by boulders wedged between narrow canyons. California condors, among the rarest birds, soar overhead. Spring wildflowers are excellent.',
    activityLevel: 'moderate',
    activities: ['Rock Climbing', 'Hiking', 'Cave Exploration', 'Condor Viewing', 'Photography'],
    itinerary: [
      'Bear Gulch Cave & Reservoir Trail (moderate, cave closes bat season)',
      'High Peaks Trail (5.3 mi loop, scrambling, stunning views)',
      'Balconies Cave Trail, look for condors overhead',
      'Juniper Canyon Trail, sunset condor viewing'
    ],
    gear: ['Hiking boots', 'Headlamp for caves', 'Climbing gear (if climbing)', 'Layers', 'Water', 'Sunscreen', 'Binoculars'],
    visited: false
  },
  {
    id: 'channel-islands',
    name: 'Channel Islands',
    state: 'California',
    driveHours: 14,
    driveMiles: 950,
    rating: 4.7,
    bestMonths: 'April-May, September-October',
    shortDescription: 'Remote islands with sea caves, marine life, and endemic species.',
    fullDescription: 'Channel Islands consists of five islands off the Southern California coast, accessible only by boat or plane. The islands feature sea caves (including the sixth-largest in the world), kelp forests, and unique wildlife. Island fox and island scrub jay are found nowhere else. Excellent kayaking, snorkeling, and camping. Rough seas can limit access.',
    activityLevel: 'moderate',
    activities: ['Kayaking', 'Snorkeling', 'Hiking', 'Camping', 'Wildlife Viewing'],
    itinerary: [
      'Santa Cruz Island: Scorpion Anchorage, kayak to sea caves',
      'Hike Potato Harbor (5 mi) or Cavern Point',
      'Snorkel kelp forests, explore tide pools',
      'Camp at Scorpion Canyon, stargaze (dark skies)'
    ],
    gear: ['Kayak (or rent)', 'Snorkel gear', 'Camping gear', 'All food/water', 'PFD', 'Dry bag', 'Seasickness meds'],
    visited: false
  },
  {
    id: 'joshua-tree',
    name: 'Joshua Tree',
    state: 'California',
    driveHours: 12,
    driveMiles: 800,
    rating: 4.7,
    bestMonths: 'October-April',
    shortDescription: 'Twisted Joshua trees, granite boulders, and exceptional rock climbing.',
    fullDescription: 'Joshua Tree spans the transition between the Mojave and Colorado Deserts. Iconic Joshua trees grow only in the Mojave section. The park is renowned for rock climbing with over 8,000 routes. Granite boulders create surreal landscapes. Spring wildflowers can be spectacular. Dark skies offer excellent stargazing.',
    activityLevel: 'moderate',
    activities: ['Rock Climbing', 'Hiking', 'Stargazing', 'Photography', 'Bouldering'],
    itinerary: [
      'Hidden Valley loop (1 mi), Barker Dam (1.3 mi)',
      'Ryan Mountain hike (3 mi, 360° views), Skull Rock',
      'Cholla Cactus Garden, Keys View sunset',
      'Rock climbing at Hidden Valley or guided session, night stargazing'
    ],
    gear: ['Hiking boots', 'Climbing gear (or guided)', 'Layers (cold nights)', 'Lots of water', 'Sunscreen', 'Headlamp', 'Star chart'],
    visited: false
  },
  {
    id: 'death-valley',
    name: 'Death Valley',
    state: 'California, Nevada',
    driveHours: 11,
    driveMiles: 730,
    rating: 4.7,
    bestMonths: 'November-March',
    shortDescription: 'Hottest place on Earth with sand dunes, badlands, and extreme landscapes.',
    fullDescription: 'Death Valley is the hottest, driest, and lowest place in North America. Badwater Basin sits 282 feet below sea level. Summer temperatures exceed 120°F. The park features sand dunes, colorful badlands, salt flats, and mountains. Rare super blooms bring wildflowers. Visit only in winter for safety.',
    activityLevel: 'moderate',
    activities: ['Scenic Drives', 'Hiking', 'Photography', 'Sand Dunes', 'Stargazing'],
    itinerary: [
      'Badwater Basin (lowest point), Artists Drive for colorful hills',
      'Mesquite Flat Sand Dunes sunrise hike, Zabriskie Point',
      'Dante\'s View (5,475 ft elevation), Golden Canyon hike',
      'Ubehebe Crater, Racetrack Playa (4WD), Wildrose Peak'
    ],
    gear: ['Desert boots', 'Sun protection', 'Massive amounts of water', 'Hat', 'Sunglasses', 'Layers (cold at night)', 'GPS'],
    visited: false
  },
  {
    id: 'sequoia-kings-canyon',
    name: 'Sequoia & Kings Canyon',
    state: 'California',
    driveHours: 12,
    driveMiles: 800,
    rating: 4.8,
    bestMonths: 'May-September',
    shortDescription: 'Giant sequoias, deep canyons, and Mount Whitney—the tallest peak in the lower 48.',
    fullDescription: 'Sequoia and Kings Canyon are adjacent parks managed together. They contain the largest trees on Earth—giant sequoias including General Sherman (largest by volume). Mount Whitney (14,505 ft) is the tallest peak in the lower 48. Kings Canyon is one of the deepest canyons in North America. High Sierra backcountry offers world-class backpacking.',
    activityLevel: 'moderate',
    activities: ['Hiking', 'Giant Tree Viewing', 'Backpacking', 'Rock Climbing', 'Caving'],
    itinerary: [
      'Giant Forest: General Sherman Tree, Congress Trail (2 mi)',
      'Moro Rock (400 steps to summit), Crescent Meadow loop',
      'Kings Canyon Scenic Byway, Zumwalt Meadow (1.5 mi)',
      'Tokopah Falls (3.4 mi), or backpack Rae Lakes Loop (41 mi)'
    ],
    gear: ['Hiking boots', 'Layers', 'Bear canister', 'Trekking poles', 'Water filter', 'Camera', 'Sunscreen'],
    visited: false
  },
  {
    id: 'yosemite',
    name: 'Yosemite',
    state: 'California',
    driveHours: 13,
    driveMiles: 870,
    rating: 4.7,
    bestMonths: 'May-June (waterfalls), September',
    shortDescription: 'Granite cliffs, waterfalls, giant sequoias, and iconic Half Dome.',
    fullDescription: 'Yosemite features sheer granite cliffs including El Capitan (3,000 feet) and Half Dome. Yosemite Falls is North America\'s tallest waterfall at 2,425 feet. Glacier Point offers panoramic valley views. Mariposa Grove contains 500 giant sequoias. High country offers pristine wilderness. Rock climbing mecca.',
    activityLevel: 'moderate',
    activities: ['Hiking', 'Rock Climbing', 'Waterfalls', 'Photography', 'Backpacking'],
    itinerary: [
      'Valley Floor: Yosemite Falls Trail (7.2 mi) or Mist Trail to Vernal Fall',
      'Half Dome hike (14-16 mi, permit required, cables)',
      'Glacier Point for sunset, Sentinel Dome hike',
      'Mariposa Grove, Tuolumne Meadows (high country)'
    ],
    gear: ['Hiking boots', 'Gloves for Half Dome cables', 'Bear canister', 'Layers', 'Water filter', 'Trekking poles', 'Permit for Half Dome'],
    visited: false
  }
];
