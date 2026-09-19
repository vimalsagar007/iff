import { FreedomFighter, FreedomFightersOutput } from '../types';

export const FREEDOM_FIGHTERS: FreedomFighter[] = [
  {
    id: 'mangal-pandey',
    name: 'Mangal Pandey',
    titleOrEpithet: 'The Spark of 1857',
    years: '1827–1857',
    birthYear: 1827,
    deathYear: 1857,
    region: 'Uttar Pradesh (Ballia)',
    contribution: 'Fired the first shot of the Sepoy Mutiny against the British East India Company at Barrackpore, sparking the Revolt of 1857.',
    events: ['Revolt of 1857', 'Barrackpore Mutiny', 'First War of Independence'],
    bio: 'Mangal Pandey was a sepoy in the 34th Bengal Native Infantry who openly rebelled against British commanders at Barrackpore on March 29, 1857. His fierce refusal to use cartridges greased with animal fat ignited a nationwide uprising against colonial rule. His sacrifice became a legendary symbol of Indian resistance against foreign subjugation. He was court-martialed and executed in April 1857, becoming the first immortal martyr of the 1857 uprising.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Mangal_Pandey_stamp.jpg/640px-Mangal_Pandey_stamp.jpg',
    famousQuote: 'Rise up brothers! When you protect your faith, victory is destined.',
    era: '1857-1885',
    role: 'Pioneer Martyr',
    keyMilestones: [
      { year: '1849', title: 'Joined Army', description: 'Enlisted in the 34th Bengal Native Infantry of the British East India Company.' },
      { year: '1857', title: 'Barrackpore Rebellion', description: 'Attacked British officers at Barrackpore on March 29, refusing greased cartridges.' },
      { year: '1857', title: 'Martyrdom', description: 'Hanged on April 8, 1857, inspiring sepoys and citizens across North and Central India.' }
    ]
  },
  {
    id: 'rani-lakshmibai',
    name: 'Rani Lakshmibai',
    titleOrEpithet: 'Jhansi Ki Rani',
    years: '1828–1858',
    birthYear: 1828,
    deathYear: 1858,
    region: 'Uttar Pradesh (Bundelkhand / Jhansi)',
    contribution: 'Fearlessly commanded the armed defense of Jhansi and Gwalior against British forces during the 1857 First War of Independence.',
    events: ['Revolt of 1857', 'Siege of Jhansi', 'Battle of Gwalior'],
    bio: 'Rani Lakshmibai was the Queen of Jhansi and one of the foremost leaders of the Indian Rebellion of 1857. Refusing to surrender her kingdom under Lord Dalhousie\'s Doctrine of Lapse, she gallantly led her troops into battle with her adopted son tied to her back. She successfully defended Jhansi against Sir Hugh Rose and later captured the Gwalior Fort alongside allied forces. She was martyred fighting heroically on June 18, 1858, near Kotah-ki-Serai in Gwalior.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rani_of_jhansi.jpg/640px-Rani_of_jhansi.jpg',
    famousQuote: 'I shall not surrender my Jhansi! (Main apni Jhansi nahi doongi!)',
    era: '1857-1885',
    role: 'Armed Resistance',
    keyMilestones: [
      { year: '1853', title: 'Doctrine of Lapse Defied', description: 'Rejected British annexation of Jhansi following the death of Maharaja Gangadhar Rao.' },
      { year: '1857', title: 'Defense of Jhansi', description: 'Rallied women and citizens to fortify Jhansi against besieging British troops.' },
      { year: '1858', title: 'Gwalior Stand & Martyrdom', description: 'Fought heroically in cavalry combat at Kotah-ki-Serai, Gwalior on June 18, 1858.' }
    ]
  },
  {
    id: 'tatya-tope',
    name: 'Tatya Tope',
    titleOrEpithet: 'Master of Guerilla Warfare',
    years: '1814–1859',
    birthYear: 1814,
    deathYear: 1859,
    region: 'Maharashtra & Madhya Pradesh',
    contribution: 'Masterminded brilliant guerilla warfare operations across Bundelkhand, Rajputana, and Central India during the 1857 uprising.',
    events: ['Revolt of 1857', 'Kanpur Siege', 'Gwalior Operations'],
    bio: 'Ramachandra Pandurang Tope, popularly known as Tatya Tope, was Nana Saheb\'s general and one of the most brilliant tactical commanders of the 1857 Rebellion. He led the recapturing of Kanpur, aided Rani Lakshmibai during the siege of Jhansi, and captured the strategic Gwalior fortress. For nearly two years, he eluded tens of thousands of British troops through masterful jungle guerilla warfare across the Narmada and Rajputana. He was betrayed by an associate and executed in Shivpuri in April 1859.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Tatya_Tope.jpg/640px-Tatya_Tope.jpg',
    famousQuote: 'We fight not for personal power, but to rid our sacred motherland of tyranny.',
    era: '1857-1885',
    role: 'Armed Resistance',
    keyMilestones: [
      { year: '1857', title: 'Kanpur Offensive', description: 'Commanded the forces that liberated Kanpur under the leadership of Nana Saheb.' },
      { year: '1858', title: 'Alliance with Lakshmibai', description: 'Coordinated tactical movements to seize Gwalior and rally Central Indian armies.' },
      { year: '1859', title: 'Guerilla Legacy', description: 'Evaded massive British forces for months before being captured and martyred.' }
    ]
  },
  {
    id: 'kunwar-singh',
    name: 'Kunwar Singh',
    titleOrEpithet: 'Veer Kunwar Singh of Jagdishpur',
    years: '1777–1858',
    birthYear: 1777,
    deathYear: 1858,
    region: 'Bihar (Bhojpur / Jagdishpur)',
    contribution: 'Led the 1857 armed insurrection in Bihar at the age of 80, liberating Jagdishpur and defeating multiple British contingents.',
    events: ['Revolt of 1857', 'Arrah Siege', 'Battle of Jagdishpur'],
    bio: 'Kunwar Singh was the chieftain of Jagdishpur in Bihar who, despite being nearly 80 years old, took up arms to lead the rebellion of 1857. He masterminded the siege of Arrah and employed agile guerilla tactics to repeatedly defeat British forces under Captain Le Grand. Even after his left wrist was shattered by a cannon ball, he severed his own hand and offered it to the sacred Ganga rather than let poison spread. He reclaimed his ancestral fort in Jagdishpur, dying victorious on April 26, 1858.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Kunwar_Singh_stamp.jpg/640px-Kunwar_Singh_stamp.jpg',
    famousQuote: 'Age is no barrier when the honor of the motherland is challenged.',
    era: '1857-1885',
    role: 'Armed Resistance',
    keyMilestones: [
      { year: '1857', title: 'Liberated Arrah', description: 'Assumed leadership of rebellious Danapur regiments and liberated Arrah.' },
      { year: '1858', title: 'Crossed the Ganges', description: 'Outmaneuvered pursuing British troops under General Lugard across the Ganga.' },
      { year: '1858', title: 'Final Victory', description: 'Routed British forces at Jagdishpur just days before succumbing to combat injuries.' }
    ]
  },
  {
    id: 'begum-hazrat-mahal',
    name: 'Begum Hazrat Mahal',
    titleOrEpithet: 'Begum of Awadh',
    years: '1820–1879',
    birthYear: 1820,
    deathYear: 1879,
    region: 'Uttar Pradesh (Awadh / Lucknow)',
    contribution: 'Spearheaded the resistance against British annexation of Awadh and organized the epic defense of Lucknow during the 1857 rebellion.',
    events: ['Revolt of 1857', 'Siege of Lucknow', 'Awadh Resistance'],
    bio: 'Begum Hazrat Mahal was the courageous queen of Awadh who took control of the government after her husband, Nawab Wajid Ali Shah, was exiled by the British. She proclaimed her young son Birjis Qadr as ruler and rallied both Hindu and Muslim nobles and peasants in a united coalition against the colonial power. Under her inspiring leadership, Indian forces seized Lucknow and held the British Residency under siege for months. After the fall of Lucknow, she refused British amnesty and pension, choosing exile in Nepal.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Begum_Hazrat_Mahal_1984_stamp_of_India.jpg/640px-Begum_Hazrat_Mahal_1984_stamp_of_India.jpg',
    famousQuote: 'Freedom cannot be bargained away for stipends and false promises of royal favor.',
    era: '1857-1885',
    role: 'Armed Resistance',
    keyMilestones: [
      { year: '1856', title: 'Awadh Annexation Resisted', description: 'Protested against British annexation and rallied the loyal subjects of Lucknow.' },
      { year: '1857', title: 'Crowning of Birjis Qadr', description: 'Established an independent revolutionary council in Lucknow uniting all communities.' },
      { year: '1858', title: 'Refused Surrender', description: 'Fought British advances step by step before retreating honorably to Nepal.' }
    ]
  },
  {
    id: 'birsa-munda',
    name: 'Birsa Munda',
    titleOrEpithet: 'Dharti Aaba (Father of the Earth)',
    years: '1875–1900',
    birthYear: 1875,
    deathYear: 1900,
    region: 'Jharkhand (Ranchi / Khunti)',
    contribution: 'Spearheaded the historic "Ulgulan" (The Great Tumult) tribal movement against British land alienation, missionary coercion, and feudal exploitation.',
    events: ['Ulgulan Movement (1899–1900)', 'Chotanagpur Tribal Resistance'],
    bio: 'Birsa Munda was a charismatic tribal freedom fighter, religious leader, and folk hero belonging to the Munda tribe of Chotanagpur. In the late 19th century, he mobilized thousands of tribal villagers in the "Ulgulan" (Great Tumult) against colonial forest laws, forced labor, and predatory moneylenders backed by the British. His revolutionary mobilization challenged the authority of the British Raj and demanded Munda Raj (indigenous self-rule). Arrested in 1900, he died in Ranchi jail at the age of 25, leaving a transformative legacy that led to the Chota Nagpur Tenancy Act.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Birsa_Munda.jpg/640px-Birsa_Munda.jpg',
    famousQuote: 'Let the kingdom of the Queen end and our kingdom be established! (Abua raj ete jana, maharani raj tundu jana!)',
    era: '1885-1919',
    role: 'Armed Resistance',
    keyMilestones: [
      { year: '1895', title: 'Proclaimed Birsaite Faith', description: 'Revitalized tribal pride and organized non-payment of rent to British landlords.' },
      { year: '1899', title: 'Launched the Ulgulan', description: 'Initiated armed resistance across Ranchi and Khunti targeting colonial authorities.' },
      { year: '1900', title: 'Imprisonment and Legacy', description: 'Captured at Jamkopai forest; his movement resulted in the Chota Nagpur Tenancy Act.' }
    ]
  },
  {
    id: 'dadabhai-naoroji',
    name: 'Dadabhai Naoroji',
    titleOrEpithet: 'The Grand Old Man of India',
    years: '1825–1917',
    birthYear: 1825,
    deathYear: 1917,
    region: 'Gujarat / Maharashtra (Mumbai)',
    contribution: 'Pioneered the "Drain of Wealth" economic critique of colonial rule, co-founded the Indian National Congress, and was the first Asian British MP.',
    events: ['Founding of Indian National Congress (1885)', 'Drain of Wealth Theory', 'Calcutta Congress (1906)'],
    bio: 'Dadabhai Naoroji was a visionary scholar, educator, and political leader whose seminal book "Poverty and Un-British Rule in India" scientifically proved that Britain was systematically draining wealth out of India. He co-founded the Indian National Congress in 1885 and presided over three of its sessions. In 1892, he became the first Asian to be elected to the British Parliament (House of Commons). At the 1906 Calcutta Congress, he formally demanded "Swaraj" (self-government) for India.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Dadabhai_Naoroji.jpg/640px-Dadabhai_Naoroji.jpg',
    famousQuote: 'We ask for only justice. Swaraj is our primary goal and birthright.',
    era: '1885-1919',
    role: 'National Leader',
    keyMilestones: [
      { year: '1885', title: 'Co-founded Congress', description: 'Instrumental in establishing the Indian National Congress in Bombay.' },
      { year: '1892', title: 'Elected to British Parliament', description: 'Won the Finsbury Central seat, using the forum to champion Indian self-rule.' },
      { year: '1906', title: 'Declared Swaraj Resolution', description: 'Presided over Calcutta Congress and declared self-government (Swaraj) as the national goal.' }
    ]
  },
  {
    id: 'bal-gangadhar-tilak',
    name: 'Bal Gangadhar Tilak',
    titleOrEpithet: 'Lokmanya ("Accepted by the People")',
    years: '1856–1920',
    birthYear: 1856,
    deathYear: 1920,
    region: 'Maharashtra (Ratnagiri / Pune)',
    contribution: 'Transformed the national movement into a mass uprising, champion of Swadeshi, Boycott, and founder of the All India Home Rule League.',
    events: ['Swadeshi Movement (1905)', 'All India Home Rule League (1916)', 'Lucknow Pact (1916)'],
    bio: 'Bal Gangadhar Tilak was the fiery nationalist leader who famously declared "Swaraj is my birthright and I shall have it." As a leader of the Lal-Bal-Pal triumvirate, he broke away from moderate mendicancy to demand radical mass mobilization. He used newspapers Kesari and Mahratta and public festivals like Ganesh Utsav to awaken national consciousness. Imprisoned for six years in Mandalay, Burma, for his nationalist writings, he returned to launch the All India Home Rule League in 1916.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Lokmanya_Bal_Gangadhar_Tilak.jpg/640px-Lokmanya_Bal_Gangadhar_Tilak.jpg',
    famousQuote: 'Swaraj is my birthright, and I shall have it!',
    era: '1885-1919',
    role: 'National Leader',
    keyMilestones: [
      { year: '1881', title: 'Founded Kesari & Mahratta', description: 'Launched revolutionary journals to educate the public on political freedom.' },
      { year: '1905', title: 'Swadeshi & Boycott Call', description: 'Spearheaded the nationwide resistance against the Partition of Bengal.' },
      { year: '1916', title: 'Home Rule League Founded', description: 'Built the mass Home Rule movement and forged Hindu-Muslim unity through Lucknow Pact.' }
    ]
  },
  {
    id: 'lala-lajpat-rai',
    name: 'Lala Lajpat Rai',
    titleOrEpithet: 'Punjab Kesari (Lion of Punjab)',
    years: '1865–1928',
    birthYear: 1865,
    deathYear: 1928,
    region: 'Punjab (Dhudike / Lahore)',
    contribution: 'Pillar of Lal-Bal-Pal, champion of Swadeshi and Punjab National Bank, martyred following a brutal lathi charge while leading the Simon Commission protest.',
    events: ['Swadeshi Movement', 'Non-Cooperation Movement', 'Simon Commission Protest (1928)'],
    bio: 'Lala Lajpat Rai was one of the foremost nationalist leaders of modern India and an integral member of the Lal-Bal-Pal triumvirate. He established the Servants of the People Society and co-founded Punjab National Bank to support indigenous enterprise. On October 30, 1928, while leading a peaceful protest against the all-white Simon Commission in Lahore, he was brutally assaulted by police superintendent James Scott. His ensuing death sparked nationwide grief and directly motivated Bhagat Singh and the HSRA to strike back.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lala_Lajpat_Rai.jpg/640px-Lala_Lajpat_Rai.jpg',
    famousQuote: 'Every blow struck on my chest will be a nail in the coffin of the British Empire.',
    era: '1919-1939',
    role: 'National Leader',
    keyMilestones: [
      { year: '1894', title: 'Founded Punjab National Bank', description: 'Helped launch India\'s first purely indigenous commercial bank.' },
      { year: '1920', title: 'Calcutta Congress President', description: 'Presided over the historic special session that endorsed Mahatma Gandhi\'s Non-Cooperation.' },
      { year: '1928', title: 'Simon Commission Protest', description: 'Led the Lahore protest where he suffered fatal lathi blows from colonial police.' }
    ]
  },
  {
    id: 'bipin-chandra-pal',
    name: 'Bipin Chandra Pal',
    titleOrEpithet: 'Father of Revolutionary Thoughts in India',
    years: '1858–1932',
    birthYear: 1858,
    deathYear: 1932,
    region: 'Bengal (Habiganj / Sylhet)',
    contribution: 'Architect of the Swadeshi ideology and economic boycott; third pillar of the Lal-Bal-Pal trio who popularized mass resistance.',
    events: ['Swadeshi Movement (1905)', 'Anti-Partition Agitation', 'Bande Mataram Publication'],
    bio: 'Bipin Chandra Pal was a brilliant orator, journalist, and nationalist philosopher who advocated for complete national self-reliance and the complete boycott of British goods. Along with Tilak and Lajpat Rai, he popularized the revolutionary creed of Swaraj, Swadeshi, Boycott, and National Education. Through his influential journals like Bande Mataram and New India, he inspired millions of youth to reject colonial servitude. Sri Aurobindo called him one of the mightiest prophets of Indian nationalism.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bipin_Chandra_Pal_1958_stamp_of_India.jpg/640px-Bipin_Chandra_Pal_1958_stamp_of_India.jpg',
    famousQuote: 'Swaraj is not merely the cessation of foreign rule; it is the realization of the collective soul of India.',
    era: '1885-1919',
    role: 'National Leader',
    keyMilestones: [
      { year: '1905', title: 'Swadeshi & Boycott Philosophy', description: 'Formulated the theoretical framework for total boycott of British institutions.' },
      { year: '1906', title: 'Founded Bande Mataram', description: 'Launched the legendary daily with Sri Aurobindo as its chief editorial voice.' },
      { year: '1907', title: 'Imprisonment for Press Freedom', description: 'Jailed for six months after refusing to give evidence against Sri Aurobindo.' }
    ]
  },
  {
    id: 'khudiram-bose',
    name: 'Khudiram Bose',
    titleOrEpithet: 'The Teenage Martyr',
    years: '1889–1908',
    birthYear: 1889,
    deathYear: 1908,
    region: 'West Bengal (Midnapore)',
    contribution: 'One of the youngest revolutionaries of the Jugantar society who attempted to assassinate notorious British magistrate Douglas Kingsford.',
    events: ['Muzaffarpur Conspiracy (1908)', 'Jugantar Revolutionary Resistance'],
    bio: 'Khudiram Bose was an intrepid teenage revolutionary from Bengal who joined the secret Jugantar society at the age of sixteen. Distressed by the brutal flogging of young patriots by British magistrate Douglas Kingsford, Bose and Prafulla Chaki were assigned to eliminate Kingsford at Muzaffarpur in 1908. Though Kingsford survived when his carriage was mistaken, Khudiram was captured at Waini railway station while Chaki took his own life to evade capture. Bose mounted the gallows with a fearless smile on August 11, 1908, at just 18 years of age.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Khudiram_Bose_1989_stamp_of_India.jpg/640px-Khudiram_Bose_1989_stamp_of_India.jpg',
    famousQuote: 'I will die with a smile, knowing my country will soon awaken to break its chains.',
    era: '1885-1919',
    role: 'Revolutionary',
    keyMilestones: [
      { year: '1905', title: 'Joined Jugantar', description: 'Recruited into active underground revolutionary groups in Midnapore.' },
      { year: '1908', title: 'Muzaffarpur Action', description: 'Carried out the historic bombing targeting Magistrate Kingsford on April 30.' },
      { year: '1908', title: 'Supreme Sacrifice', description: 'Walked fearlessly to the gallows on August 11, 1908, inspiring a generation of youth.' }
    ]
  },
  {
    id: 'bhikaji-cama',
    name: 'Madam Bhikaji Cama',
    titleOrEpithet: 'Mother of the Indian Revolution',
    years: '1861–1936',
    birthYear: 1861,
    deathYear: 1936,
    region: 'Maharashtra (Mumbai) & International',
    contribution: 'Unfurled the first version of the Indian National Flag on foreign soil at Stuttgart, Germany in 1907 and ran the Paris Indian Society.',
    events: ['Stuttgart Socialist Conference (1907)', 'Paris Indian Society', 'Bande Mataram Publication in Exile'],
    bio: 'Madam Bhikaji Cama was a pioneering female revolutionary, social reformer, and international ambassador for Indian freedom. Operating primarily from London and Paris, she published the revolutionary journal Bande Mataram and smuggled revolutionary literature and revolvers into India. On August 22, 1907, at the International Socialist Congress in Stuttgart, Germany, she unfurled the first prototype of India\'s national tricolor flag, demanding international condemnation of British tyranny. Her courageous diplomacy won worldwide sympathy for Indian independence.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bhikaiji_Cama_1962_stamp_of_India.jpg/640px-Bhikaiji_Cama_1962_stamp_of_India.jpg',
    famousQuote: 'Behold, the flag of independent India is born! It has been sanctified by the blood of young patriots.',
    era: '1885-1919',
    role: 'Revolutionary',
    keyMilestones: [
      { year: '1905', title: 'Paris Indian Society', description: 'Co-founded the radical overseas revolutionary hub with Shyamji Krishna Varma.' },
      { year: '1907', title: 'Unfurled Tricolor in Stuttgart', description: 'Hoisted the Flag of Indian Independence before an international assembly in Germany.' },
      { year: '1909', title: 'Smuggled Arms & Journals', description: 'Financed and smuggled arms and subversive journals to Indian revolutionaries.' }
    ]
  },
  {
    id: 'subramania-bharati',
    name: 'Subramania Bharati',
    titleOrEpithet: 'Mahakavi (Great Poet)',
    years: '1882–1921',
    birthYear: 1882,
    deathYear: 1921,
    region: 'Tamil Nadu (Ettayapuram / Chennai)',
    contribution: 'Ignited revolutionary zeal in South India through fiery nationalist poetry, journalism in "India", and progressive feminist activism.',
    events: ['Swadeshi Movement in Tamil Nadu', 'Surat Congress (1907)', 'Pondicherry Exile Resistance'],
    bio: 'Subramania Bharati was a legendary Tamil poet, polyglot, journalist, and nationalist whose fiery verses transformed Tamil literature into a weapon against British rule. Writing for Swadesamitran and editing the radical weekly India, he mobilized people across caste and gender barriers for the motherland. Faced with British arrest warrants, he operated from French-controlled Pondicherry alongside Sri Aurobindo and Lala Lajpat Rai. His patriotic anthems like "Senthamizh Nadenum Pothinile" and "Vande Mataram" remain timeless expressions of Indian unity.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Subramanya_Bharathi.jpg/640px-Subramanya_Bharathi.jpg',
    famousQuote: 'Even if our lives are sliced into thirty pieces, we will still sing praises to our Mother Bharat!',
    era: '1885-1919',
    role: 'National Leader',
    keyMilestones: [
      { year: '1904', title: 'Joined Swadesamitran', description: 'Began writing incisive political commentary demanding total independence.' },
      { year: '1908', title: 'Exile to Pondicherry', description: 'Escaped British arrest and published radical nationalist literature from French enclave.' },
      { year: '1918', title: 'Arrested by Colonial Police', description: 'Arrested upon returning to British India, spending weeks in Cuddalore central prison.' }
    ]
  },
  {
    id: 'vo-chidambaram-pillai',
    name: 'V.O. Chidambaram Pillai',
    titleOrEpithet: 'Kappalottiya Thamizhan (The Tamil Helmsman)',
    years: '1872–1936',
    birthYear: 1872,
    deathYear: 1936,
    region: 'Tamil Nadu (Ottapidaram / Thoothukudi)',
    contribution: 'Challenged the British maritime trade monopoly by launching the Swadeshi Steam Navigation Company and leading the historic Coral Mill strike.',
    events: ['Swadeshi Steam Navigation Company (1906)', 'Coral Mill Strike (1908)', 'Tirunelveli Uprising'],
    bio: 'Vallinayagan Ulaganathan Chidambaram Pillai, known affectionately as VOC, was a prominent lawyer, trade union pioneer, and fiery disciple of Bal Gangadhar Tilak. In 1906, he broke the absolute British maritime monopoly by establishing the first indigenous shipping firm, the Swadeshi Steam Navigation Company, operating between Tuticorin and Colombo. He organized the 1908 Coral Mill workers\' strike, one of the earliest successful organized labor strikes in India. For his defiance, the British sentenced him to double life imprisonment and forced him to yoked heavy oil presses in prison.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/V._O._Chidambaram_Pillai_1972_stamp_of_India.jpg/640px-V._O._Chidambaram_Pillai_1972_stamp_of_India.jpg',
    famousQuote: 'We will sail our own ships, weave our own cloth, and govern our own soil.',
    era: '1885-1919',
    role: 'National Leader',
    keyMilestones: [
      { year: '1906', title: 'Launched Swadeshi Shipping', description: 'Registered the Swadeshi Steam Navigation Company, purchasing ships S.S. Gaelia and S.S. Lawoe.' },
      { year: '1908', title: 'Coral Mill Strike', description: 'Led factory workers to victory, sparking massive popular demonstrations in Tuticorin.' },
      { year: '1908', title: 'Hard Labor Imprisonment', description: 'Sentenced to rigorous imprisonment in Coimbatore and Kannur, enduring brutal torture.' }
    ]
  },
  {
    id: 'mahatma-gandhi',
    name: 'Mahatma Gandhi (Mohandas K. Gandhi)',
    titleOrEpithet: 'Father of the Nation (Bapu)',
    years: '1869–1948',
    birthYear: 1869,
    deathYear: 1948,
    region: 'Gujarat (Porbandar / Ahmedabad)',
    contribution: 'Pioneered Satyagraha (truth-force) and Ahimsa (non-violence), leading mass nationwide movements that dismantled British colonial hegemony.',
    events: ['Champaran Satyagraha (1917)', 'Non-Cooperation Movement (1920–22)', 'Salt March / Dandi March (1930)', 'Quit India Movement (1942)'],
    bio: 'Mohandas Karamchand Gandhi was the paramount spiritual and political leader of the Indian independence movement. He forged the philosophy of Satyagraha—relentless resistance to injustice through strict truth and non-violence—first in South Africa and then across India. From the Champaran indigo farmers\' agitation to the historic 240-mile Salt March to Dandi, he mobilized hundreds of millions across caste, religious, and gender lines. In 1942, he gave the clarion call "Do or Die" during the Quit India Movement, decisively eroding the foundations of the British Raj.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Portrait_Gandhi.jpg/640px-Portrait_Gandhi.jpg',
    famousQuote: 'In a gentle way, you can shake the world. / Do or Die (Karo ya Maro).',
    era: '1919-1939',
    role: 'National Leader',
    keyMilestones: [
      { year: '1917', title: 'Champaran Satyagraha', description: 'Won historic relief for impoverished indigo farmers in Bihar through non-violent resistance.' },
      { year: '1930', title: 'The Dandi Salt March', description: 'Walked 240 miles to defy the British salt tax, sparking the nationwide Civil Disobedience Movement.' },
      { year: '1942', title: 'Quit India Movement', description: 'Issued the "Do or Die" mandate from Gowalia Tank, demanding immediate British withdrawal.' }
    ]
  },
  {
    id: 'sardar-patel',
    name: 'Sardar Vallabhbhai Patel',
    titleOrEpithet: 'The Iron Man of India / Sardar',
    years: '1875–1950',
    birthYear: 1875,
    deathYear: 1950,
    region: 'Gujarat (Nadiad / Bardoli)',
    contribution: 'Led the heroic Bardoli Satyagraha, served as first Deputy Prime Minister & Home Minister, and brilliantly integrated 565 princely states into unified India.',
    events: ['Kheda Satyagraha (1918)', 'Bardoli Satyagraha (1928)', 'Integration of Princely States (1947–49)', 'Quit India Movement'],
    bio: 'Sardar Vallabhbhai Patel was an indispensable architect of Indian independence and the political unification of the nation. In 1928, his resolute leadership of the farmers of Bardoli against exorbitant tax hikes earned him the title "Sardar" (Chief). As independent India\'s first Home Minister, he accomplished the monumental diplomatic task of integrating over 565 disparate princely states—including Junagadh, Hyderabad, and Kashmir—into the Indian Union without major bloodshed. He also laid the foundations of modern Indian administrative services.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Sardar_patel.jpg/640px-Sardar_patel.jpg',
    famousQuote: 'Manpower without unity is not a strength unless it is harmonized and united properly, then it becomes a spiritual power.',
    era: '1919-1939',
    role: 'National Leader',
    keyMilestones: [
      { year: '1928', title: 'Bardoli Victory', description: 'Led the peasant tax revolt that forced the British government to return confiscated lands.' },
      { year: '1931', title: 'Karachi Congress President', description: 'Presided over Karachi session that drafted India\'s Fundamental Rights and Economic Policy resolution.' },
      { year: '1947', title: 'National Integration', description: 'Unified 565 princely states into one sovereign democratic Indian Union.' }
    ]
  },
  {
    id: 'bhagat-singh',
    name: 'Bhagat Singh',
    titleOrEpithet: 'Shaheed-e-Azam (King of Martyrs)',
    years: '1907–1931',
    birthYear: 1907,
    deathYear: 1931,
    region: 'Punjab (Banga / Lahore)',
    contribution: 'Revolutionary leader of the Hindustan Socialist Republican Association (HSRA), popularized "Inquilab Zindabad", and ignited socialist anti-imperialism.',
    events: ['Saunders Assassination (1928)', 'Central Assembly Bombing (1929)', 'Historic Lahore Jail Hunger Strike', 'Lahore Conspiracy Case'],
    bio: 'Bhagat Singh was a charismatic revolutionary intellectual who transformed the freedom struggle with his radical socialist ideals. Along with Chandrashekhar Azad and Sukhdev, he reshaped the HRA into the Hindustan Socialist Republican Association. On April 8, 1929, he and Batukeshwar Dutt tossed harmless smoke bombs in the Central Legislative Assembly to "make the deaf hear." In Lahore Central Jail, he led a 116-day hunger strike for political prisoners\' basic rights, reading voraciously and writing seminal essays like "Why I Am an Atheist." He was executed on March 23, 1931, along with Sukhdev and Rajguru, immortalized at age 23.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bhagat_Singh_1930.jpg/640px-Bhagat_Singh_1930.jpg',
    famousQuote: 'They may kill me, but they cannot kill my ideas. They can crush my body, but they will not be able to crush my spirit. (Inquilab Zindabad!)',
    era: '1919-1939',
    role: 'Revolutionary',
    keyMilestones: [
      { year: '1926', title: 'Founded Naujawan Bharat Sabha', description: 'Organized youth to oppose communalism and champion socialist liberation.' },
      { year: '1928', title: 'HSRA Formed at Feroz Shah Kotla', description: 'Re-formed the revolutionary association with a clear socialist vision.' },
      { year: '1929', title: 'Central Assembly Action', description: 'Threw leaflets and non-lethal bombs in Delhi assembly chanting "Inquilab Zindabad".' },
      { year: '1931', title: 'Martyrdom on March 23', description: 'Hanged alongside Rajguru and Sukhdev, cementing his status as an eternal youth icon.' }
    ]
  },
  {
    id: 'chandrashekhar-azad',
    name: 'Chandrashekhar Azad',
    titleOrEpithet: 'Azad ("The Free")',
    years: '1906–1931',
    birthYear: 1906,
    deathYear: 1931,
    region: 'Madhya Pradesh (Bhabhra) / Uttar Pradesh',
    contribution: 'Commander-in-Chief of the HSRA, brilliant tactician of revolutionary operations who upheld his solemn oath to remain forever free.',
    events: ['Non-Cooperation Movement (1921)', 'Kakori Train Action (1925)', 'Saunders Elimination (1928)', 'Alfred Park Final Stand (1931)'],
    bio: 'Chandrashekhar Tiwari assumed the pseudonym "Azad" (Free) at age fifteen when arrested during the Non-Cooperation Movement, defiantly giving his name as Azad, his father\'s as Swatantrata (Freedom), and his residence as Jail. He went on to become the military commander of the Hindustan Socialist Republican Association, orchestrating operations such as the Kakori Train Action and mentoring young revolutionaries including Bhagat Singh and Rajguru. On February 27, 1931, surrounded by colonial police at Alfred Park in Allahabad, he fought off a siege for over thirty minutes before shooting himself with his last bullet to keep his pledge to never be taken alive.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Chandra_Shekhar_Azad.jpg/640px-Chandra_Shekhar_Azad.jpg',
    famousQuote: 'We will face the bullets of our enemies; we were free, we are free, and we shall remain free! (Dushman ki goliyon ka hum samna karenge, Azad hi rahe hain, Azad hi rahenge!)',
    era: '1919-1939',
    role: 'Revolutionary',
    keyMilestones: [
      { year: '1921', title: 'Defiance in Court', description: 'Flogged 15 times at age 15 for shouting Vande Mataram; earned the name "Azad".' },
      { year: '1925', title: 'Kakori Train Action', description: 'Executed the tactical seizure of colonial treasury funds to finance revolutionary resistance.' },
      { year: '1931', title: 'Last Stand at Alfred Park', description: 'Fought single-handedly against a battalion of police, remaining undefeated till his final breath.' }
    ]
  },
  {
    id: 'subhas-chandra-bose',
    name: 'Subhas Chandra Bose',
    titleOrEpithet: 'Netaji (Respected Leader)',
    years: '1897–1945',
    birthYear: 1897,
    deathYear: 1945,
    region: 'Odisha (Cuttack) / West Bengal',
    contribution: 'Formed the Provisional Government of Free India (Arzi Hukumat-e-Azad Hind) and led the Indian National Army (INA) in armed offensive against the British Empire.',
    events: ['Congress Presidency (Haripura 1938 & Tripuri 1939)', 'Forward Bloc Founded (1939)', 'The Great Escape (1941)', 'Azad Hind Fauj / INA Offensive (1943–45)'],
    bio: 'Subhas Chandra Bose, reverently called Netaji, was a charismatic nationalist titan who resigned from the elite Indian Civil Service (ICS) to dedicate his life to liberation. Twice elected President of the Indian National Congress, he broke with gradualist approaches to found the All India Forward Bloc. In 1941, he engineered a daring escape from British house arrest in Calcutta, traveling through Afghanistan, the Soviet Union, and Germany to Southeast Asia. There, he mobilized the Indian National Army (Azad Hind Fauj) with the immortal battle cry "Chalo Delhi" and declared: "Give me blood, and I shall give you freedom!"',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Subhas_Chandra_Bose_NRB.jpg/640px-Subhas_Chandra_Bose_NRB.jpg',
    famousQuote: 'Give me blood, and I shall give you freedom! (Tum mujhe khoon do, main tumhe azadi doonga!)',
    era: '1939-1947',
    role: 'National Leader',
    keyMilestones: [
      { year: '1938', title: 'Congress President at Haripura', description: 'Laid out a vision of modern industrial planning and total independence for India.' },
      { year: '1941', title: 'The Great Escape', description: 'Disguised as Ziauddin, escaped British surveillance from Calcutta to Berlin and Tokyo.' },
      { year: '1943', title: 'Provisional Government of Azad Hind', description: 'Established independent India\'s first provisional government in Singapore, recognized by 9 sovereign nations.' }
    ]
  },
  {
    id: 'sarojini-naidu',
    name: 'Sarojini Naidu',
    titleOrEpithet: 'The Nightingale of India (Bharat Kokila)',
    years: '1879–1949',
    birthYear: 1879,
    deathYear: 1949,
    region: 'Telangana (Hyderabad) / Uttar Pradesh',
    contribution: 'First Indian woman President of the Indian National Congress, led the Dharasana Salt Satyagraha raid, and champion of women\'s franchise.',
    events: ['Home Rule Movement', 'Non-Cooperation Movement', 'Dharasana Salt Works Raid (1930)', 'Quit India Movement (1942)'],
    bio: 'Sarojini Naidu was a renowned lyric poet, eloquent orator, and pioneering woman freedom fighter who mobilized thousands of Indian women into the political sphere. In 1925, she became the first Indian woman to preside over the Indian National Congress. Following Gandhi\'s arrest during the 1930 Salt March, she stepped forward to command the non-violent raid on the Dharasana Salt Works, facing down brutal police beatings with serene discipline. In independent India, she became the country\'s first female state governor (United Provinces/Uttar Pradesh).',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Sarojini_Naidu_1925.jpg/640px-Sarojini_Naidu_1925.jpg',
    famousQuote: 'A country\'s greatness lies in its undying ideals of love and sacrifice that inspire the mothers of the race.',
    era: '1919-1939',
    role: 'National Leader',
    keyMilestones: [
      { year: '1925', title: 'Congress President', description: 'Presided over the Kanpur session of the Indian National Congress.' },
      { year: '1930', title: 'Commanded Dharasana Satyagraha', description: 'Led 2,500 satyagrahis against violent police cordons, capturing global front-page headlines.' },
      { year: '1947', title: 'First Woman Governor', description: 'Appointed Governor of Uttar Pradesh, serving until her passing in 1949.' }
    ]
  },
  {
    id: 'jawaharlal-nehru',
    name: 'Jawaharlal Nehru',
    titleOrEpithet: 'Pandit Nehru / Architect of Modern India',
    years: '1889–1964',
    birthYear: 1889,
    deathYear: 1964,
    region: 'Uttar Pradesh (Allahabad)',
    contribution: 'Drafted the historic Purna Swaraj (Complete Independence) declaration at the 1929 Lahore Congress and served as the first Prime Minister of free India.',
    events: ['Non-Cooperation Movement', 'Lahore Congress Purna Swaraj (1929)', 'Quit India Movement (1942)', 'Tryst with Destiny (1947)'],
    bio: 'Jawaharlal Nehru was a central figure in Indian politics who infused the national independence movement with modern socialist, democratic, and internationalist values. Under his presidency at the Lahore Congress on December 31, 1929, the Indian National Congress unfurled the tricolor and declared "Purna Swaraj" (Complete Independence) as its unconditional objective. Spending over nine years in colonial prisons, he penned monumental historical works including "The Discovery of India." On the midnight of August 14–15, 1947, he delivered the historic "Tryst with Destiny" address inaugurating free India.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Jnehru.jpg/640px-Jnehru.jpg',
    famousQuote: 'At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom.',
    era: '1919-1939',
    role: 'National Leader',
    keyMilestones: [
      { year: '1929', title: 'Purna Swaraj Declaration', description: 'Hoisted the national flag on the banks of the Ravi River in Lahore, declaring total freedom.' },
      { year: '1942', title: 'Imprisoned in Ahmednagar Fort', description: 'Authored "The Discovery of India" during nearly three years of isolation.' },
      { year: '1947', title: 'Tryst with Destiny', description: 'Inaugurated independent India as its first Prime Minister.' }
    ]
  },
  {
    id: 'br-ambedkar',
    name: 'Dr. B.R. Ambedkar (Bhimrao Ramji Ambedkar)',
    titleOrEpithet: 'Babasaheb / Chief Architect of the Constitution',
    years: '1891–1956',
    birthYear: 1891,
    deathYear: 1956,
    region: 'Maharashtra & Madhya Pradesh (Mhow)',
    contribution: 'Championed social democracy, fundamental human rights, and liberty; chaired the Drafting Committee of the Indian Constitution ensuring equality for all.',
    events: ['Mahad Satyagraha (1927)', 'Poona Pact (1932)', 'Round Table Conferences (1930–32)', 'Drafting of the Constitution (1947–50)'],
    bio: 'Dr. Bhimrao Ramji Ambedkar was a polymath, jurist, economist, and visionary social reformer who waged an unrelenting struggle for social emancipation and human dignity. In 1927, he led the historic Mahad Satyagraha asserting the right of untouchables to draw water from public tanks. He represented the depressed classes at the Round Table Conferences in London and founded the Independent Labour Party. As independent India\'s first Law Minister and Chairman of the Drafting Committee, he crafted a forward-looking Constitution enshrining liberty, equality, fraternity, and affirmative action.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Dr._Bhimrao_Ambedkar.jpg/640px-Dr._Bhimrao_Ambedkar.jpg',
    famousQuote: 'Educate, Agitate, Organize! / Cultivation of mind should be the ultimate aim of human existence.',
    era: '1919-1939',
    role: 'Social Reformer & Leader',
    keyMilestones: [
      { year: '1927', title: 'Mahad Water Satyagraha', description: 'Led the peaceful march to drink water from the Chhadar tank, launching the civil rights movement.' },
      { year: '1932', title: 'Signed Poona Pact', description: 'Secured reserved legislative seats for depressed classes in colonial legislatures.' },
      { year: '1949', title: 'Delivered the Constitution', description: 'Presented the completed Constitution of India to Dr. Rajendra Prasad and the Constituent Assembly.' }
    ]
  },
  {
    id: 'ashfaqulla-khan',
    name: 'Ashfaqulla Khan',
    titleOrEpithet: 'Shaheed-e-Watan',
    years: '1900–1927',
    birthYear: 1900,
    deathYear: 1927,
    region: 'Uttar Pradesh (Shahjahanpur)',
    contribution: 'Key leader of the Hindustan Republican Association (HRA), poet of freedom, and hero of the Kakori Train Action who forged unbreakable communal harmony.',
    events: ['Kakori Train Action (1925)', 'Non-Cooperation Movement', 'HRA Underground Resistance'],
    bio: 'Ashfaqulla Khan was a passionate Urdu poet and fearless revolutionary who, alongside his close comrade Pandit Ram Prasad Bismil, formed the core of the Hindustan Republican Association. He played a pivotal role in the Kakori Train Action of August 9, 1925, securing colonial treasury funds to arm revolutionaries against British oppression. When British interrogators tried to turn him against his Hindu comrades by invoking religious division, he vehemently denounced their divide-and-rule tactics. He kissed the hangman\'s noose with the Quran upon his chest on December 19, 1927, at Faizabad Jail.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Ashfaqulla_Khan_1988_stamp_of_India.jpg/640px-Ashfaqulla_Khan_1988_stamp_of_India.jpg',
    famousQuote: 'My only wish is that when I die, the dust of my motherland is applied to my brow.',
    era: '1919-1939',
    role: 'Revolutionary',
    keyMilestones: [
      { year: '1924', title: 'Joined HRA', description: 'United with Ram Prasad Bismil and Sachindra Nath Sanyal to launch armed resistance.' },
      { year: '1925', title: 'Kakori Train Action', description: 'Skillfully halted the 8-Down passenger train near Kakori to seize government funds.' },
      { year: '1927', title: 'Gallows at Faizabad', description: 'Hanged on December 19, 1927, an enduring beacon of interfaith patriotic solidarity.' }
    ]
  },
  {
    id: 'ram-prasad-bismil',
    name: 'Ram Prasad Bismil',
    titleOrEpithet: 'Poet-Revolutionary of Kakori',
    years: '1897–1927',
    birthYear: 1897,
    deathYear: 1927,
    region: 'Uttar Pradesh (Shahjahanpur / Gorakhpur)',
    contribution: 'Founding leader of the Hindustan Republican Association (HRA), masterminded the Kakori Train Action, and immortalized the anthem "Sarfaroshi ki Tamanna".',
    events: ['Mainpuri Conspiracy (1918)', 'Kakori Train Action (1925)', 'HRA Manifesto Drafting'],
    bio: 'Ram Prasad Bismil was a gifted poet, translator, and military strategist who founded the revolutionary organization "Matrivedi" and co-founded the Hindustan Republican Association with Sachindra Nath Sanyal in 1924. Writing under pen names "Bismil" and "Agyat", his stirring poetry—most notably his rendition of "Sarfaroshi ki Tamanna"—became the anthem of freedom fighters across India. He executed the Kakori Train Action of 1925 to finance the revolutionary struggle. Sentenced to death in the Kakori Conspiracy trial, he was hanged in Gorakhpur Jail on December 19, 1927.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Ram_Prasad_Bismil.jpg/640px-Ram_Prasad_Bismil.jpg',
    famousQuote: 'Sarfaroshi ki tamanna ab hamare dil mein hai, dekhna hai zor kitna baazu-e-qaatil mein hai!',
    era: '1919-1939',
    role: 'Revolutionary',
    keyMilestones: [
      { year: '1918', title: 'Mainpuri Conspiracy', description: 'Distributed banned patriotic literature and evaded British police dragnet in the forests.' },
      { year: '1924', title: 'Founded HRA', description: 'Published the revolutionary constitution and manifesto "The Revolutionary".' },
      { year: '1927', title: 'Martyrdom in Gorakhpur', description: 'Went to the gallows chanting Om, leaving behind an indelible cultural legacy.' }
    ]
  },
  {
    id: 'sukhdev-thapar',
    name: 'Sukhdev Thapar',
    titleOrEpithet: 'Mastermind of the HSRA',
    years: '1907–1931',
    birthYear: 1907,
    deathYear: 1931,
    region: 'Punjab (Ludhiana / Lahore)',
    contribution: 'Chief organizational brain of the HSRA in Punjab, founded Naujawan Bharat Sabha, and martyred alongside Bhagat Singh and Rajguru.',
    events: ['Naujawan Bharat Sabha', 'Saunders Assassination (1928)', 'Lahore Conspiracy Case', 'Historic Hunger Strike'],
    bio: 'Sukhdev Thapar was the chief organizational strategist and Punjab provincial head of the Hindustan Socialist Republican Association. He worked in deep synergy with Bhagat Singh, establishing study circles and organizing revolutionary cells across Lahore, Rawalpindi, and Lyallpur. He coordinated the logistics of the elimination of police officer J.P. Saunders in 1928 to avenge the death of Lala Lajpat Rai. During the prolonged trial, his unwavering resolve and incisive wit demoralized the prosecution. He was executed on March 23, 1931, in Lahore Central Jail at the age of 23.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Sukhdev_Thapar.jpg/640px-Sukhdev_Thapar.jpg',
    famousQuote: 'Revolution is an inalienable right of mankind. Freedom is an imperishable birth of all.',
    era: '1919-1939',
    role: 'Revolutionary',
    keyMilestones: [
      { year: '1926', title: 'Co-founded Naujawan Bharat Sabha', description: 'Structured youth assemblies to promote secularism and revolutionary ideas.' },
      { year: '1928', title: 'Saunders Plan Execution', description: 'Strategized the precise tactical layout for the Lahore operation.' },
      { year: '1931', title: 'Hanged on March 23', description: 'Sacrificed his life in Lahore Jail alongside his soulmates Bhagat Singh and Rajguru.' }
    ]
  },
  {
    id: 'shivaram-rajguru',
    name: 'Shivaram Hari Rajguru',
    titleOrEpithet: 'The Sharpshooter of HSRA',
    years: '1908–1931',
    birthYear: 1908,
    deathYear: 1931,
    region: 'Maharashtra (Khed / Pune)',
    contribution: 'Fearless marksman of the HSRA, fired the decisive first shot at Saunders in Lahore to avenge Lala Lajpat Rai, and was martyred at age 22.',
    events: ['Saunders Assassination (1928)', 'HSRA Armed Operations', 'Lahore Conspiracy Trial'],
    bio: 'Shivaram Hari Rajguru was a valiant revolutionary born in Khed near Pune, Maharashtra, who had run away from home at a young age to study Sanskrit in Varanasi before joining the Hindustan Socialist Republican Association. Known for his extraordinary physical stamina, wrestling prowess, and marksman accuracy, he fired the first shot that brought down J.P. Saunders outside the police headquarters in Lahore on December 17, 1928. He was captured in Pune in 1929 and sentenced to death in the Lahore Conspiracy Case. He was hanged on March 23, 1931, singing patriotic songs.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Shivaram_Rajguru.jpg/640px-Shivaram_Rajguru.jpg',
    famousQuote: 'Courage is the supreme virtue; our motherland demands action, not empty tears.',
    era: '1919-1939',
    role: 'Revolutionary',
    keyMilestones: [
      { year: '1927', title: 'Inducted into HSRA', description: 'Joined Chandrashekhar Azad and Bhagat Singh, providing military sharpshooting skills.' },
      { year: '1928', title: 'Saunders Operation', description: 'Fired the opening shot avenging the martyred Punjab Kesari Lala Lajpat Rai.' },
      { year: '1931', title: 'Immortal March 23', description: 'Attained supreme martyrdom in Lahore Central Jail alongside Bhagat Singh and Sukhdev.' }
    ]
  },
  {
    id: 'alluri-sitarama-raju',
    name: 'Alluri Sitarama Raju',
    titleOrEpithet: 'Manyam Veerudu (Hero of the Jungles)',
    years: '1897–1924',
    birthYear: 1897,
    deathYear: 1924,
    region: 'Andhra Pradesh (Visakhapatnam / Godavari)',
    contribution: 'Spearheaded the legendary Rampa Rebellion (1922–1924) uniting Adivasis in guerilla warfare against British 1882 Madras Forest Act exploitation.',
    events: ['Rampa Rebellion (1922–1924)', 'Police Station Raids of Chintapalli & Krishnadevipeta'],
    bio: 'Alluri Sitarama Raju was an ascetic revolutionary from Andhra Pradesh who championed the cause of exploited tribal communities in the Eastern Ghats. When the British colonial government passed the oppressive 1882 Madras Forest Act restricting customary tribal cultivation (podu), he mobilized Adivasi warriors into a formidable guerilla army. Using traditional bows, arrows, and captured police firearms, his forces repeatedly raided police stations at Chintapalli, Rampachodavaram, and Krishnadevipeta, leaving advance letters daring British officers to intercept them. Captured in May 1924, he was tied to a tree and executed without trial.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Alluri_Sitarama_Raju_1986_stamp_of_India.jpg/640px-Alluri_Sitarama_Raju_1986_stamp_of_India.jpg',
    famousQuote: 'The forest belongs to its indigenous children; no foreign crown can steal our natural birthright.',
    era: '1919-1939',
    role: 'Armed Resistance',
    keyMilestones: [
      { year: '1921', title: 'Inspired by Non-Cooperation', description: 'Preached temperance and boycott while preparing tribal clans for self-defense.' },
      { year: '1922', title: 'Rampa Rebellion Launched', description: 'Conducted tactical lightning raids on British police armories across Godavari agency.' },
      { year: '1924', title: 'Martyrdom at Koyyuru', description: 'Captured after two years of intense jungle warfare and shot dead on May 7, 1924.' }
    ]
  },
  {
    id: 'matangini-hazra',
    name: 'Matangini Hazra',
    titleOrEpithet: 'Gandhi Buri (Old Lady Gandhi)',
    years: '1870–1942',
    birthYear: 1870,
    deathYear: 1942,
    region: 'West Bengal (Tamluk / Midnapore)',
    contribution: 'Led the Quit India march on Tamluk police station at age 72, holding the tricolor aloft even as colonial police shot her three times.',
    events: ['Civil Disobedience Movement (1930)', 'Salt Satyagraha at Alinan', 'Quit India Movement (1942)', 'Tamluk Uprising'],
    bio: 'Matangini Hazra was a fearless peasant woman from Midnapore who devoted her later life to the Gandhian independence movement, earning the affectionate name "Gandhi Buri." She actively violated the salt tax in 1930 and was repeatedly jailed for participating in civil disobedience. On September 29, 1942, during the Quit India Movement, she led a massive procession of 6,000 freedom fighters to capture the Tamluk police station. When British police opened fire, she stepped forward holding the Indian National Flag high, chanting "Vande Mataram" through three bullet wounds until she fell a martyr.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Matangini_Hazra_2002_stamp_of_India.jpg/640px-Matangini_Hazra_2002_stamp_of_India.jpg',
    famousQuote: 'Shoot if you must! But the tricolor will never touch the dirt while I breathe!',
    era: '1939-1947',
    role: 'Pioneer Martyr',
    keyMilestones: [
      { year: '1930', title: 'Salt Satyagraha Arrest', description: 'Arrested for manufacturing salt at Alinan salt center during Civil Disobedience.' },
      { year: '1933', title: 'Chowkidari Tax Protest', description: 'Marched in defiance of colonial Governor Sir John Anderson, serving six months hard labor.' },
      { year: '1942', title: 'Tamluk Martyrdom', description: 'Shot three times by police while keeping the national flag aloft on September 29, 1942.' }
    ]
  },
  {
    id: 'aruna-asaf-ali',
    name: 'Aruna Asaf Ali',
    titleOrEpithet: 'Heroine of the 1942 Movement',
    years: '1909–1996',
    birthYear: 1909,
    deathYear: 1996,
    region: 'Punjab (Kalka / Haryana) & Delhi',
    contribution: 'Hoisted the Congress flag at Gowalia Tank Maidan on August 9, 1942, initiating the Quit India Movement, and led the underground resistance.',
    events: ['Salt Satyagraha (1930)', 'Gowalia Tank Flag Hoisting (1942)', 'Quit India Underground Radio & Resistance', 'Royal Indian Navy Mutiny Support (1946)'],
    bio: 'Aruna Asaf Ali was a legendary educator, activist, and political organizer known as the "Grand Old Lady of the Independence Movement." On the morning of August 9, 1942, after the entire senior Congress leadership was arrested following the Quit India resolution, she boldly stepped onto the stage at Gowalia Tank Maidan in Bombay and unfurled the tricolor flag amidst tear gas and police charges. Evading British arrest for over four years with a reward on her head, she published the underground monthly "Inquilab" alongside Ram Manohar Lohia. In 1946, she actively organized support for the striking Royal Indian Navy ratings.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Aruna_Asaf_Ali_1998_stamp_of_India.jpg/640px-Aruna_Asaf_Ali_1998_stamp_of_India.jpg',
    famousQuote: 'We do not ask for concessions; we demand our absolute sovereign right to govern our own destiny.',
    era: '1939-1947',
    role: 'National Leader',
    keyMilestones: [
      { year: '1930', title: 'First Imprisonment', description: 'Participated in Salt Satyagraha and was jailed in Delhi and Tihar jails.' },
      { year: '1942', title: 'Gowalia Tank Flag Hoisting', description: 'Defied British police cordons to hoist the National Flag, sparking the nationwide Quit India surge.' },
      { year: '1942-46', title: 'Underground Resistance', description: 'Operated an extensive clandestine network of publications and sabotage against British logistical lines.' }
    ]
  },
  {
    id: 'surya-sen',
    name: 'Surya Sen',
    titleOrEpithet: 'Master Da',
    years: '1894–1934',
    birthYear: 1894,
    deathYear: 1934,
    region: 'Bengal (Chittagong)',
    contribution: 'Chief architect and supreme commander of the daring Chittagong Armoury Raid of 1930, establishing a provisional revolutionary government.',
    events: ['Non-Cooperation Movement', 'Chittagong Armoury Raid (1930)', 'Battle of Jalalabad Hill (1930)', 'Underground Resistance'],
    bio: 'Surya Sen, revered as "Master Da" by his comrades and students, was a schoolteacher from Chittagong who organized one of the most audacious military operations in Indian colonial history. On April 18, 1930, his revolutionary contingent—the Indian Republican Army (Chittagong Branch)—simultaneously captured British police and auxiliary force armories, severed telegraph links, and proclaimed an independent provisional government. On April 22, at the Battle of Jalalabad Hill, his young cadres fought pitched gun battles against heavily armed British regiments. Captured in 1933, he was brutally tortured and executed on January 12, 1934.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Surya_sen_1977_stamp_of_india.jpg/640px-Surya_sen_1977_stamp_of_india.jpg',
    famousQuote: 'Never forget the 18th of April, 1930—the day of the eastern rebellion. Keep the flag of freedom flying forever.',
    era: '1919-1939',
    role: 'Revolutionary',
    keyMilestones: [
      { year: '1918', title: 'President of Chittagong Congress', description: 'Used open political work to recruit and train dedicated revolutionary squads.' },
      { year: '1930', title: 'Chittagong Armoury Raid', description: 'Captured British military posts and severed all imperial communication lines on April 18.' },
      { year: '1934', title: 'Martyrdom in Chittagong Jail', description: 'Hanged on January 12, 1934; his teeth and bones were smashed before execution by colonial jailers.' }
    ]
  },
  {
    id: 'pritilata-waddedar',
    name: 'Pritilata Waddedar',
    titleOrEpithet: 'The Valiant Daughter of Chittagong',
    years: '1911–1932',
    birthYear: 1911,
    deathYear: 1932,
    region: 'Bengal (Chittagong)',
    contribution: 'Pioneering woman revolutionary commander under Surya Sen who led the daring attack on the whites-only Pahartali European Club.',
    events: ['Chittagong Armoury Raid Support', 'Dhalghat Encounter (1932)', 'Pahartali European Club Raid (1932)'],
    bio: 'Pritilata Waddedar was an extraordinary student and educator who graduated with distinction from Bethune College in Calcutta before joining Surya Sen\'s revolutionary group. On September 24, 1932, she was appointed by Master Da to lead a tactical assault on the infamous Pahartali European Club, which bore the racist sign "Dogs and Indians not allowed." Disguised as a Punjabi man, she led her team in a successful operation that struck fear into British colonial elites. Trapped and wounded by gunfire during the withdrawal, she swallowed potassium cyanide to ensure no revolutionary secrets were disclosed.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Pritilata_Waddedar_2012_stamp_of_India.jpg/640px-Pritilata_Waddedar_2012_stamp_of_India.jpg',
    famousQuote: 'Let this sacrifice inspire Indian women to realize that they are not mere spectators, but warriors for the nation.',
    era: '1919-1939',
    role: 'Revolutionary',
    keyMilestones: [
      { year: '1930', title: 'Joined Underground IRA', description: 'Recruited by Master Da and assigned secret courier and arms supply responsibilities.' },
      { year: '1932', title: 'Dhalghat Escape', description: 'Successfully survived British military siege of their safehouse in Dhalghat.' },
      { year: '1932', title: 'Pahartali Club Action & Martyrdom', description: 'Commanded the raid on the colonial European club on September 24, choosing poison over capture.' }
    ]
  },
  {
    id: 'rani-gaidinliu',
    name: 'Rani Gaidinliu',
    titleOrEpithet: 'Daughter of the Hills / Rani of the Nagas',
    years: '1915–1993',
    birthYear: 1915,
    deathYear: 1993,
    region: 'Manipur & Nagaland (Nungkao)',
    contribution: 'Led an armed revolt of the Heraka movement against British colonial rule in Manipur and the Naga hills at the age of sixteen.',
    events: ['Heraka Religious and Anti-Colonial Movement (1930–32)', 'Naga Armed Resistance'],
    bio: 'Rani Gaidinliu was a fearless Naga spiritual and political leader from Manipur who took up the mantle of the Heraka anti-colonial resistance following the execution of her cousin Haipou Jadonang. At just sixteen years of age, she organized an armed revolt against British forces, advocating for total independence and the preservation of indigenous cultural sovereignty. In 1932, British forces launched a massive counter-insurgency operation and captured her fortress at Pulomi. Sentenced to life imprisonment, Jawaharlal Nehru visited her in Shillong jail in 1937, gave her the title "Rani" (Queen), and successfully campaigned for her release upon Indian independence in 1947.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Rani_Gaidinliu_1996_stamp_of_India.jpg/640px-Rani_Gaidinliu_1996_stamp_of_India.jpg',
    famousQuote: 'We are free people; the white men have no right to govern our sacred hills and impose taxes on our soil.',
    era: '1919-1939',
    role: 'Armed Resistance',
    keyMilestones: [
      { year: '1930', title: 'Joined Freedom Struggle', description: 'Began organizing hill villages against British colonial forced labor and taxation.' },
      { year: '1932', title: 'Capture at Pulomi', description: 'Surrounded by Assam Rifles after fierce fighting; sentenced to life imprisonment at age 16.' },
      { year: '1947', title: 'Released upon Independence', description: 'Released after 14 years in British prisons on the orders of Prime Minister Jawaharlal Nehru.' }
    ]
  },
  {
    id: 'udham-singh',
    name: 'Udham Singh',
    titleOrEpithet: 'Shaheed Udham Singh / Ram Mohammad Singh Azad',
    years: '1899–1940',
    birthYear: 1899,
    deathYear: 1940,
    region: 'Punjab (Sunam) & London',
    contribution: 'Avenged the 1919 Jallianwala Bagh massacre by assassinating Michael O\'Dwyer in London after a twenty-one-year vigil of justice.',
    events: ['Jallianwala Bagh Massacre Eyewitness (1919)', 'Ghadar Party Organizing', 'Caxton Hall Assassination (1940)'],
    bio: 'Udham Singh was a revolutionary patriot who survived the brutal 1919 Jallianwala Bagh massacre in Amritsar, where he had been serving drinking water to the trapped crowd. Haunted by the slaughter of over a thousand peaceful men, women, and children, he took an oath to bring the perpetrators to justice. For over twenty years, he traversed Africa, America, and Europe as a Ghadar Party organizer. On March 13, 1940, at Caxton Hall in London, he shot dead Michael O\'Dwyer, the former Lieutenant Governor of Punjab who had approved General Dyer\'s massacre. In court, he declared his name to be "Ram Mohammad Singh Azad", symbolizing all-faith Indian solidarity.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Udham_Singh_stamp.jpg/640px-Udham_Singh_stamp.jpg',
    famousQuote: 'I did it because I had a grudge against him. He was the real culprit. He wanted to crush the spirit of my people, so I have crushed him.',
    era: '1939-1947',
    role: 'Revolutionary',
    keyMilestones: [
      { year: '1919', title: 'Witnessed Jallianwala Bagh', description: 'Survived the horrifying massacre, dedicating the rest of his life to retributive justice.' },
      { year: '1927', title: 'Ghadar Party Activity', description: 'Arrested in Lahore for possessing unauthorized firearms and publishing "Ghadr-i-Ganj".' },
      { year: '1940', title: 'Caxton Hall Action & Martyrdom', description: 'Assassinated O\'Dwyer on March 13, 1940, and was executed at Pentonville Prison on July 31.' }
    ]
  },
  {
    id: 'khan-abdul-ghaffar-khan',
    name: 'Khan Abdul Ghaffar Khan',
    titleOrEpithet: 'Frontier Gandhi / Badshah Khan',
    years: '1890–1988',
    birthYear: 1890,
    deathYear: 1988,
    region: 'North-West Frontier (Undivided India / Peshawar)',
    contribution: 'Founded the "Khudai Khidmatgar" (Servants of God / Red Shirts), mobilizing 100,000 Pashtuns in non-violent resistance against British rule.',
    events: ['Rowlatt Act Satyagraha (1919)', 'Qissa Khwani Bazaar Massacre Stand (1930)', 'Civil Disobedience Movement', 'Quit India Movement (1942)'],
    bio: 'Khan Abdul Ghaffar Khan was a monumental Pashtun freedom fighter and staunch advocate of non-violence who proved that the warrior Pashtuns could embrace absolute Ahimsa. In 1929, he established the Khudai Khidmatgar (Servants of God), an army of over 100,000 disciplined unarmed volunteers wearing red shirts. During the 1930 Civil Disobedience Movement, British troops opened fire on his peaceful followers at Qissa Khwani Bazaar in Peshawar; when ordered to shoot unarmed Pashtun protesters, soldiers of the Garhwal Rifles famously refused. A close confidant of Gandhi, he spent decades in colonial and post-colonial incarceration.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Khan_Abdul_Ghaffar_Khan.jpg/640px-Khan_Abdul_Ghaffar_Khan.jpg',
    famousQuote: 'There is nothing surprising in a Muslim or a Pathan like me subscribing to the creed of non-violence. It is not a new creed; it was followed 1400 years ago by the Prophet.',
    era: '1919-1939',
    role: 'National Leader',
    keyMilestones: [
      { year: '1929', title: 'Founded Khudai Khidmatgar', description: 'Created the world\'s first non-violent army of over 100,000 dedicated volunteers.' },
      { year: '1930', title: 'Qissa Khwani Bazaar Stand', description: 'Unarmed volunteers withstood machine-gun fire, sparking nationwide revolt.' },
      { year: '1987', title: 'Awarded Bharat Ratna', description: 'Conferred India\'s highest civilian honor in recognition of lifelong struggle for human freedom.' }
    ]
  },
  {
    id: 'maulana-abul-kalam-azad',
    name: 'Maulana Abul Kalam Azad',
    titleOrEpithet: 'Scholar of Freedom / Imam-e-Hind',
    years: '1888–1958',
    birthYear: 1888,
    deathYear: 1958,
    region: 'West Bengal (Calcutta) & Delhi',
    contribution: 'Youngest President of the Indian National Congress (at age 35), led the Quit India movement, editor of Al-Hilal, and first Education Minister of free India.',
    events: ['Khilafat Movement (1919–20)', 'Non-Cooperation Movement', 'Quit India Movement (1942)', 'Simla Conference Negotiations (1945)'],
    bio: 'Maulana Abul Kalam Ghulam Muhiyuddin Azad was a towering Islamic scholar, philosopher, journalist, and nationalist leader who staunchly defended Hindu-Muslim unity and rejected communal partition. Through his weekly Urdu journal Al-Hilal, he attacked British imperialism and urged Muslims to join the mainstream nationalist cause. In 1923, he became the youngest person ever elected President of the Indian National Congress. During his second presidency from 1940 to 1946, he led the Congress through the tumultuous Quit India years and steered independence negotiations with the British Cabinet Mission. In free India, he established the IITs, UGC, and Sahitya Akademi.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Abul_Kalam_Azad_in_1940.jpg/640px-Abul_Kalam_Azad_in_1940.jpg',
    famousQuote: 'If an angel were to descend from heaven and offer me Swaraj within twenty-four hours on condition of abandoning Hindu-Muslim unity, I would refuse Swaraj.',
    era: '1919-1939',
    role: 'National Leader',
    keyMilestones: [
      { year: '1912', title: 'Launched Al-Hilal', description: 'Transformed modern political discourse and mobilized the Muslim community for national freedom.' },
      { year: '1923', title: 'Youngest Congress President', description: 'Presided over special session of the Indian National Congress in Delhi at age 35.' },
      { year: '1942', title: 'Commanded Quit India', description: 'Jailed in Ahmednagar Fort with the Congress Working Committee throughout World War II.' }
    ]
  },
  {
    id: 'kasturba-gandhi',
    name: 'Kasturba Gandhi',
    titleOrEpithet: 'Ba (Mother)',
    years: '1869–1944',
    birthYear: 1869,
    deathYear: 1944,
    region: 'Gujarat (Porbandar / Rajkot)',
    contribution: 'Pioneer of women\'s non-violent civil rights satyagrahas in South Africa and India, stepped into leadership roles during Gandhi\'s incarcerations.',
    events: ['South Africa Phoenix Settlement (1904–14)', 'Champaran Agitation (1917)', 'Non-Cooperation Movement', 'Quit India Movement (1942)'],
    bio: 'Kasturba Mohandas Gandhi, affectionately called "Ba", was a steadfast political activist and freedom fighter who was central to the satyagraha movement in both South Africa and India. In 1913, she led women in South Africa against oppressive marriage tax laws, enduring three months of hard labor. In India, she educated peasant women in hygiene and literacy in Champaran and repeatedly assumed leadership of protest marches whenever Mahatma Gandhi was imprisoned. In 1942, she was arrested for intending to address a Quit India rally and died in colonial captivity at the Aga Khan Palace in Pune on February 22, 1944.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Kasturba_Gandhi.jpg/640px-Kasturba_Gandhi.jpg',
    famousQuote: 'When the men are in prison, it is the sacred duty of the women to step forward and carry the flag.',
    era: '1919-1939',
    role: 'National Leader',
    keyMilestones: [
      { year: '1913', title: 'South African Women\'s March', description: 'Led Indian women across the Transvaal border protesting unjust discriminatory anti-Indian laws.' },
      { year: '1917', title: 'Champaran Health & Education', description: 'Organized primary schools and medical hygiene drives for impoverished rural women in Bihar.' },
      { year: '1944', title: 'Martyrdom in Aga Khan Palace', description: 'Passed away while imprisoned alongside Mahatma Gandhi during the Quit India struggle.' }
    ]
  },
  {
    id: 'chittaranjan-das',
    name: 'Chittaranjan Das',
    titleOrEpithet: 'Deshbandhu (Friend of the Nation)',
    years: '1870–1925',
    birthYear: 1870,
    deathYear: 1925,
    region: 'West Bengal (Dhaka / Kolkata)',
    contribution: 'Legendary defense counsel in the Alipore Bomb Case, co-founder of the Swaraj Party with Motilal Nehru, and political mentor to Subhas Chandra Bose.',
    events: ['Alipore Bomb Trial Defense (1908)', 'Non-Cooperation Movement', 'Founding of the Swaraj Party (1923)', 'Bengal Pact (1923)'],
    bio: 'Chittaranjan Das, widely revered as "Deshbandhu", was a preeminent barrister, poet, and nationalist leader from Bengal. He gained legendary acclaim for defending Sri Aurobindo in the sensational 1908 Alipore Bomb Case without charging a fee, securing an acquittal. He renounced his lucrative legal career in 1920 to throw himself into the Non-Cooperation Movement, donating his palatial house to the nation. In 1923, he co-founded the Swaraj Party to contest colonial legislative council elections and expose British autocratic rule from within. He mentored young leaders, most notably Netaji Subhas Chandra Bose.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Chittaranjan_Das_1965_stamp_of_India.jpg/640px-Chittaranjan_Das_1965_stamp_of_India.jpg',
    famousQuote: 'If I die in this work of winning freedom, I shall have lived well. Freedom is the breath of our national soul.',
    era: '1919-1939',
    role: 'National Leader',
    keyMilestones: [
      { year: '1908', title: 'Alipore Bomb Case Defense', description: 'Delivered an iconic legal defense of Sri Aurobindo that shaped Indian legal history.' },
      { year: '1920', title: 'Renounced Legal Practice', description: 'Gave away his vast personal fortune and estate to establish medical and educational trusts.' },
      { year: '1923', title: 'Founded Swaraj Party', description: 'Created parliamentary wing of the national movement to obstruct colonial governance.' }
    ]
  },
  {
    id: 'tiruppur-kumaran',
    name: 'Tiruppur Kumaran (Kumarasamy Mudaliar)',
    titleOrEpithet: 'Kodi Katha Kumaran (Kumaran who protected the Flag)',
    years: '1904–1932',
    birthYear: 1904,
    deathYear: 1932,
    region: 'Tamil Nadu (Chennimalai / Tiruppur)',
    contribution: 'Clung to the banned Indian National Flag and refused to let it fall to the ground even as colonial police beat him to death.',
    events: ['Desa Bandhu Youth Association', 'Civil Disobedience Movement in Tamil Nadu (1932)'],
    bio: 'Tiruppur Kumaran was a humble handloom weaver and nationalist youth organizer who founded the Desa Bandhu Youth Association to protest British oppression in Tamil Nadu. On January 11, 1932, during a peaceful protest march in Tiruppur in support of the banned Civil Disobedience movement, British police mercilessly launched a brutal lathi assault on the procession. Kumaran held the Indian national tricolor tightly in his arms throughout the savage attack, shielding it with his body. Even as he fell mortally wounded and bled to death, he held the flag upright, never allowing it to touch the ground.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Tirupur_Kumaran_2004_stamp_of_India.jpg/640px-Tirupur_Kumaran_2004_stamp_of_India.jpg',
    famousQuote: 'Let every bone in my body be broken, but this flag of independent India shall never kiss the ground!',
    era: '1919-1939',
    role: 'Pioneer Martyr',
    keyMilestones: [
      { year: '1930', title: 'Founded Youth League', description: 'Mobilized textile mill workers and weavers into the national patriotic struggle.' },
      { year: '1932', title: 'Tiruppur March', description: 'Led the peaceful flag demonstration defying Section 144 colonial bans.' },
      { year: '1932', title: 'Martyrdom with Flag', description: 'Passed away holding the tricolor aloft on January 11, 1932, revered across Tamil Nadu.' }
    ]
  }
];

/**
 * Returns structured JSON matching the prompt format:
 * {
 *   "fighters": [
 *     {
 *       "name": "...",
 *       "years": "...",
 *       "region": "...",
 *       "contribution": "...",
 *       "events": ["..."],
 *       "bio": "...",
 *       "photo_url": "..."
 *     }
 *   ]
 * }
 */
export function getStructuredFightersJson(): FreedomFightersOutput {
  return {
    fighters: FREEDOM_FIGHTERS.map((f) => ({
      name: f.name,
      years: f.years,
      region: f.region,
      contribution: f.contribution,
      events: f.events,
      bio: f.bio,
      photo_url: f.photo_url
    }))
  };
}

export const HISTORICAL_MILESTONES = [
  {
    year: '1857',
    title: 'The First War of Independence',
    subtitle: 'The Great Revolt / Sepoy Mutiny',
    description: 'Mangal Pandey, Rani Lakshmibai, Tatya Tope, Kunwar Singh, and Begum Hazrat Mahal rise in an armed rebellion against East India Company rule.',
    era: '1857-1885'
  },
  {
    year: '1885',
    title: 'Founding of the Indian National Congress',
    subtitle: 'Genesis of Organized Nationalism',
    description: 'Dadabhai Naoroji, A.O. Hume, and early nationalists unite delegates from all presidencies to articulate political and economic rights.',
    era: '1885-1919'
  },
  {
    year: '1905',
    title: 'Partition of Bengal & Swadeshi Movement',
    subtitle: 'Vande Mataram & Boycott',
    description: 'Bal Gangadhar Tilak, Bipin Chandra Pal, and Lala Lajpat Rai (Lal-Bal-Pal) launch nationwide boycott of foreign goods and promote indigenous industry.',
    era: '1885-1919'
  },
  {
    year: '1919',
    title: 'Jallianwala Bagh Massacre & Non-Cooperation',
    subtitle: 'Turning Point of Resistance',
    description: 'General Dyer massacres peaceful citizens at Amritsar. Mahatma Gandhi launches the nationwide Non-Cooperation Movement uniting communities.',
    era: '1919-1939'
  },
  {
    year: '1928-1931',
    title: 'HSRA Revolutionary Peak & Dandi Salt March',
    subtitle: 'Inquilab Zindabad & Civil Disobedience',
    description: 'Bhagat Singh, Azad, Rajguru, and Sukhdev challenge imperial power while Gandhi walks to Dandi to defy the British salt monopoly.',
    era: '1919-1939'
  },
  {
    year: '1942',
    title: 'Quit India Movement & INA Offensive',
    subtitle: 'Do or Die & Chalo Delhi',
    description: 'Aruna Asaf Ali, Matangini Hazra, and millions answer Gandhi\'s call to "Do or Die". Netaji Subhas Chandra Bose advances with the Azad Hind Fauj.',
    era: '1939-1947'
  },
  {
    year: '1947',
    title: 'Independence & Dawn of the Republic',
    subtitle: 'Tryst with Destiny',
    description: 'At midnight on August 15, 1947, India achieves sovereignty after nine decades of relentless struggle, sacrifice, and courage.',
    era: '1939-1947'
  }
];

export const MAJOR_MOVEMENTS = [
  'All Movements',
  'Revolt of 1857',
  'Swadeshi Movement',
  'Non-Cooperation Movement',
  'Civil Disobedience / Dandi March',
  'Quit India Movement',
  'Revolutionary Resistance / HSRA',
  'Armed & Tribal Uprisings'
];
