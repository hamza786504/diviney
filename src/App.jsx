import './App.css'
import axios from 'axios';
function App() {


  const philosophers = [
    {
      fullName: "Johanna \"Hannah\" Arendt",
      lifespan: "1906-1975",
      nationality: "German-American",
      era: "20th-century philosophy",
      concepts: [
        "totalitarianism",
        "the human condition",
        "the banality of evil",
        "vita activa",
        "public sphere",
        "power and violence",
        "plurality",
        "natality",
        "thinking and judging",
        "the social vs. the political"
      ],
      framework: "Political theory and philosophy",
      majorWorks: [
        "The Origins of Totalitarianism",
        "The Human Condition",
        "Eichmann in Jerusalem: A Report on the Banality of Evil",
        "On Revolution",
        "Between Past and Future",
        "On Violence",
        "The Life of the Mind",
        "Crises of the Republic"
      ],
      quotes: [
        "The sad truth is that most evil is done by people who never make up their minds to be good or evil.",
        "The most radical revolutionary will become a conservative the day after the revolution.",
        "Forgiveness is the key to action and freedom."
      ],
      personality: "Insightful, critical, and concerned with political and social issues",
      context: "Jewish intellectual who fled Nazi Germany; witnessed the rise and fall of totalitarian regimes",
      style: "Combines philosophical analysis with historical and political insight; known for original and sometimes controversial interpretations",
      keyIdeas: [
        "Totalitarianism as a new form of government, distinct from traditional tyranny",
        "The banality of evil: evil actions can result from ordinary people following orders",
        "The vita activa: labor, work, and action as fundamental human activities",
        "The importance of the public sphere for political freedom and plurality",
        "Distinction between power (collective action) and violence in politics",
        "Natality: the human capacity for new beginnings as the root of freedom",
        "The social vs. the political: critique of the rise of the social at the expense of genuine political action",
        "Thinking and judging as crucial activities for moral and political life",
        "The concept of 'worldlessness' in modern society",
        "The tension between truth and politics in public discourse"
      ],
      influence: [
        "Major influence on political theory and philosophy in the 20th and 21st centuries",
        "Her analysis of totalitarianism remains foundational in political science",
        "Contributed to the development of theories of the public sphere and civil society",
        "Influenced discussions on evil, responsibility, and morality in politics",
        "Her work on revolution and freedom has impacted studies of democratic theory",
        "Her concepts have been applied in fields ranging from sociology to legal theory"
      ],
      controversies: [
        "Her portrayal of Adolf Eichmann and the concept of the 'banality of evil'",
        "Criticisms of her views on school desegregation in the United States",
        "Debates over her interpretation of the relationship between the social and the political",
        "Discussions about her critique of the French Revolution compared to the American Revolution",
        "Her complex relationship with Zionism and critiques of the state of Israel",
        "Interpretations of her views on the role of violence in politics"
      ],
      legacy: [
        "Her work on totalitarianism continues to inform understandings of authoritarian regimes",
        "The concept of the 'banality of evil' has profoundly influenced discussions on morality and responsibility",
        "Her analysis of the human condition and political action remains relevant in contemporary political theory",
        "Her emphasis on plurality and the public sphere has influenced theories of democracy and civil society",
        "Her insights on thinking and judging continue to be applied in philosophy and ethics",
        "Her life and work serve as an example of engaged intellectual discourse in times of political crisis"
      ],
      year: "1906",
      connections: ["Martin Heidegger", "Karl Jaspers", "Walter Benjamin", "Mary McCarthy", "Hans Jonas", "Theodor Adorno"],
      imageUrl: "/images/arendt.jpg",
      timeline: [
        { year: 1906, event: "Born in Linden, Germany" },
        { year: 1924, event: "Begins studying philosophy at the University of Marburg" },
        { year: 1933, event: "Flees Nazi Germany for France" },
        { year: 1941, event: "Escapes to the United States" },
        { year: 1951, event: "Publishes 'The Origins of Totalitarianism'" },
        { year: 1958, event: "Publishes 'The Human Condition'" },
        { year: 1961, event: "Covers the Adolf Eichmann trial in Jerusalem for The New Yorker" },
        { year: 1975, event: "Dies in New York City" }
      ]
    },
    {
      fullName: "Aristotle",
      lifespan: "384-322 BCE",
      nationality: "Greek",
      era: "Ancient Greek philosophy",
      concepts: [
        "virtue ethics",
        "golden mean",
        "four causes",
        "categorical logic",
        "empiricism",
        "teleology",
        "eudaimonia",
        "substance theory",
        "potentiality and actuality",
        "hylomorphism"
      ],
      framework: "Aristotelian philosophy",
      majorWorks: [
        "Nicomachean Ethics",
        "Politics",
        "Metaphysics",
        "Physics",
        "Poetics",
        "Rhetoric",
        "On the Soul",
        "Organon (collection of logical works)"
      ],
      quotes: [
        "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        "The whole is greater than the sum of its parts.",
        "It is the mark of an educated mind to be able to entertain a thought without accepting it."
      ],
      personality: "Systematic, observant, analytical, and wide-ranging in interests",
      context: "Student of Plato, tutor to Alexander the Great, founder of the Lyceum in Athens",
      style: "Systematic treatises; combines logical analysis with empirical observation",
      keyIdeas: [
        "Virtue ethics: moral character is developed through habit and practice",
        "Golden mean: virtue lies in the middle between extremes",
        "Four causes: material, formal, efficient, and final causes explain the nature of change and existence",
        "Syllogistic logic: a system of deductive reasoning",
        "Empiricism: knowledge comes primarily from sensory experience",
        "Teleology: everything in nature has a purpose or final cause",
        "Eudaimonia: the highest human good is the realization of one's full potential",
        "Classification of sciences: theoretical, practical, and productive",
        "Political theory: humans are 'political animals' naturally suited for life in a polis",
        "Hylomorphism: physical objects are combinations of matter and form"
      ],
      influence: [
        "Foundational figure in Western philosophy, science, and logic",
        "His works formed the basis of medieval scholasticism",
        "Significantly influenced Islamic and Jewish philosophy",
        "His biological works were influential until the 19th century",
        "His ethical and political theories continue to be debated and applied",
        "His system of logic dominated the field until the 19th century"
      ],
      controversies: [
        "His views on slavery and women's roles reflect the prejudices of his time",
        "Some of his scientific ideas (e.g., spontaneous generation) were later disproven",
        "Debates over the interpretation of his metaphysical concepts",
        "Critiques of his teleological view of nature",
        "Disagreements over the relationship between his philosophy and Christian theology"
      ],
      legacy: [
        "Often referred to simply as 'The Philosopher' in Western tradition",
        "His works cover an extraordinarily wide range of subjects, influencing nearly every field of knowledge",
        "The Aristotelian tradition has been a major current in Western thought for over two millennia",
        "His ethical theory remains influential in contemporary virtue ethics",
        "His contributions to formal logic were groundbreaking and long-lasting",
        "His political ideas have influenced theories of citizenship and governance"
      ],
      year: "-384",
      connections: ["Plato", "Alexander the Great", "Theophrastus", "Thomas Aquinas", "Averroes"],
      imageUrl: "/images/aristotle.jpg",
      timeline: [
        { year: -384, event: "Born in Stagira, Chalcidice" },
        { year: -367, event: "Joins Plato's Academy in Athens" },
        { year: -343, event: "Becomes tutor to Alexander the Great" },
        { year: -335, event: "Founds the Lyceum in Athens" },
        { year: -323, event: "Leaves Athens after the death of Alexander the Great" },
        { year: -322, event: "Dies in Chalcis, Euboea" }
      ]
    },
    {
      fullName: "Simone Lucie Ernestine Marie Bertrand de Beauvoir",
      lifespan: "1908-1986",
      nationality: "French",
      era: "20th-century philosophy",
      concepts: [
        "existentialism",
        "feminism",
        "ethics of ambiguity",
        "situated freedom",
        "the Other",
        "bad faith",
        "authenticity",
        "reciprocity",
        "oppression",
        "lived experience"
      ],
      framework: "Existentialist feminism",
      majorWorks: [
        "The Second Sex",
        "The Ethics of Ambiguity",
        "She Came to Stay",
        "The Mandarins",
        "The Coming of Age",
        "Memoirs of a Dutiful Daughter",
        "The Prime of Life"
      ],
      quotes: [
        "One is not born, but rather becomes, a woman.",
        "I am too intelligent, too demanding, and too resourceful for anyone to be able to take charge of me entirely.",
        "To catch a husband is an art; to hold him is a job."
      ],
      personality: "Intellectually rigorous, socially conscious, and fiercely independent",
      context: "20th-century France; World War II; post-war intellectual and feminist movements",
      style: "Combines philosophical analysis with personal narrative and social critique",
      keyIdeas: [
        "Women are not born but made - gender is socially constructed",
        "The concept of woman as 'the Other' in relation to man",
        "Existentialist ethics applied to feminist theory",
        "Critique of traditional marriage and motherhood",
        "The importance of economic independence for women's liberation",
        "The body as a situation that shapes one's experience of the world",
        "The ethics of ambiguity: freedom entails responsibility and engagement",
        "Critique of myths and stereotypes about women in literature and society",
        "Analysis of aging and society's treatment of the elderly",
        "The role of committed literature in social and political change"
      ],
      influence: [
        "Pioneered modern feminism, particularly second-wave feminism",
        "Made significant contributions to existentialist philosophy",
        "Influenced the development of feminist ethics and phenomenology",
        "Her work on aging inspired further studies in gerontology",
        "Her personal life challenged conventional notions of relationships",
        "Inspired generations of women to pursue intellectual and professional careers"
      ],
      controversies: [
        "Her open relationship with Jean-Paul Sartre challenged social norms",
        "Criticisms of her views on motherhood and traditional female roles",
        "Debates over the applicability of her Western feminist ideas globally",
        "Her support for existentialist politics and engagement with Marxism",
        "Discussions about the autobiographical nature of her fiction",
        "Critiques of her initial stance on the Algerian War"
      ],
      legacy: [
        "'The Second Sex' remains a foundational text in feminist philosophy",
        "Her work bridged the gap between philosophy and lived experience",
        "Contributed to the popularization of existentialism",
        "Her ideas on gender as a social construct continue to influence gender studies",
        "Her memoirs provide valuable insights into 20th-century intellectual life",
        "Her emphasis on women's bodily experiences influenced later feminist thought"
      ],
      year: "1908",
      connections: ["Jean-Paul Sartre", "Albert Camus", "Maurice Merleau-Ponty", "Betty Friedan", "Judith Butler", "Franz Fanon"],
      imageUrl: "/images/beauvoir.jpg",
      timeline: [
        { year: 1908, event: "Born in Paris, France" },
        { year: 1929, event: "Meets Jean-Paul Sartre, beginning a lifelong personal and intellectual partnership" },
        { year: 1943, event: "Publishes her first novel, 'She Came to Stay'" },
        { year: 1945, event: "Co-founds the political and literary review 'Les Temps Modernes'" },
        { year: 1949, event: "Publishes 'The Second Sex', a landmark work in feminist philosophy" },
        { year: 1954, event: "Wins the prestigious Prix Goncourt for 'The Mandarins'" },
        { year: 1970, event: "Becomes an active member of the French women's liberation movement" },
        { year: 1986, event: "Dies in Paris, buried next to Sartre in the Montparnasse Cemetery" }
      ]
    },
    {
      fullName: "Siddhartha Gautama (Buddha, 'The Enlightened One')",
      lifespan: "c. 563 BCE - c. 483 BCE (dates disputed)",
      nationality: "Ancient Indian (born in present-day Nepal)",
      era: "Ancient Indian philosophy",
      concepts: [
        "Four Noble Truths",
        "Eightfold Path",
        "Middle Way",
        "Karma",
        "Nirvana",
        "Impermanence (Anicca)",
        "Non-self (Anatta)",
        "Dependent Origination",
        "Mindfulness",
        "Compassion (Karuna)"
      ],
      framework: "Buddhism",
      majorWorks: [
        "Dhammapada",
        "Sutta Pitaka",
        "Vinaya Pitaka",
        "Abhidhamma Pitaka"
      ],
      quotes: [
        "Peace comes from within. Do not seek it without.",
        "The mind is everything. What you think you become.",
        "Three things cannot be long hidden: the sun, the moon, and the truth."
      ],
      personality: "Compassionate, serene, and focused on ending suffering",
      context: "Lived during a time of social and religious upheaval in ancient India",
      style: "Taught through sermons, parables, and dialogues; emphasized personal experience and inquiry",
      keyIdeas: [
        "The Four Noble Truths: the truth of suffering, its cause, its cessation, and the path to its cessation",
        "The Eightfold Path: right view, right resolve, right speech, right conduct, right livelihood, right effort, right mindfulness, right concentration",
        "The Middle Way between extreme asceticism and sensual indulgence",
        "Karma: the law of moral causation",
        "Nirvana: the state of liberation from suffering and the cycle of rebirth",
        "Impermanence: all phenomena are in constant flux",
        "Non-self: the absence of a permanent, unchanging self",
        "Dependent Origination: all phenomena arise in dependence upon multiple causes and conditions",
        "Mindfulness: clear awareness of the present moment",
        "Compassion for all sentient beings"
      ],
      influence: [
        "Founder of Buddhism, one of the world's major religions and philosophical traditions",
        "Buddhist philosophy has influenced various schools of thought in Asia and beyond",
        "Buddhist meditation practices have been widely adopted in psychology and wellness",
        "Buddhist ethics have influenced social and political movements",
        "Buddhist art and architecture have had a significant impact on world culture",
        "Buddhist concepts have influenced modern fields like cognitive science and physics"
      ],
      controversies: [
        "Debates over the historical details of Buddha's life",
        "Interpretations of Buddha's teachings on metaphysical issues",
        "The development of different schools of Buddhism and their varying interpretations",
        "The role of women in early Buddhism and later traditions",
        "The compatibility of Buddhism with modern science and secular philosophies",
        "The political use of Buddhism in various Asian countries"
      ],
      legacy: [
        "Buddhism is practiced by hundreds of millions of people worldwide",
        "Buddhist philosophy continues to influence modern thought and culture",
        "Mindfulness and meditation, derived from Buddhist practices, are widely used in healthcare and psychology",
        "Buddhist ethics of non-violence have inspired numerous peace movements",
        "Buddhist art and iconography are recognized and appreciated globally",
        "The Dalai Lama and other Buddhist leaders continue to be influential global figures"
      ],
      year: "-563",
      connections: ["Mahavira", "Confucius", "Lao Tzu", "Ashoka", "Nagarjuna", "Dalai Lama"],
      imageUrl: "/images/buddha.jpg",
      timeline: [
        { year: -563, event: "Born as Siddhartha Gautama in Lumbini (present-day Nepal)" },
        { year: -534, event: "Leaves palace life to seek enlightenment" },
        { year: -528, event: "Attains enlightenment under the Bodhi tree in Bodhgaya" },
        { year: -528, event: "Delivers first sermon at Sarnath, setting the wheel of Dharma in motion" },
        { year: -483, event: "Dies and enters Parinirvana in Kushinagar" },
        { year: -250, event: "Emperor Ashoka converts to Buddhism and spreads it across Asia" },
        { year: 0, event: "Buddhism begins to spread along the Silk Road to China (approximate date)" }
      ]
    },
    {
      fullName: "Albert Camus",
      lifespan: "1913-1960",
      nationality: "French-Algerian",
      era: "20th-century philosophy",
      concepts: [
        "absurdism",
        "existentialism",
        "revolt",
        "the absurd",
        "philosophical suicide",
        "the myth of Sisyphus",
        "lucidity",
        "Mediterranean thought",
        "rebellion",
        "ethical irony"
      ],
      framework: "Absurdism",
      majorWorks: [
        "The Stranger",
        "The Myth of Sisyphus",
        "The Plague",
        "The Rebel",
        "The Fall",
        "The First Man",
        "Caligula (play)",
        "The Just Assassins (play)"
      ],
      quotes: [
        "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
        "In the midst of winter, I found there was, within me, an invincible summer.",
        "I rebel; therefore we exist."
      ],
      personality: "Passionate, morally engaged, and humanistic",
      context: "Born in French Algeria; lived through World War II and the Algerian War of Independence",
      style: "Combines philosophical essays with literary fiction to explore existential and moral questions",
      keyIdeas: [
        "The absurd: the confrontation between human desire for meaning and the indifferent universe",
        "Revolt as a response to the absurd, rather than suicide or philosophical rationalization",
        "Acceptance of the absurd as a path to freedom and authentic living",
        "Critique of ideologies that claim to provide absolute meaning",
        "The importance of lucidity in facing the human condition",
        "Solidarity and collective revolt against injustice",
        "The ethics of moderation and limits",
        "The rejection of violence as a means of political change",
        "The celebration of life and sensual experience despite the absurd",
        "The role of the artist in bearing witness to their time"
      ],
      influence: [
        "Major figure in the philosophy of absurdism and existentialism",
        "Influenced post-war French thought and literature",
        "His critique of totalitarianism impacted political philosophy",
        "His literary works are considered classics of 20th-century literature",
        "Contributed to the development of ethical thought in an age of ideological extremes",
        "Inspired movements for individual freedom and social justice"
      ],
      controversies: [
        "His complex stance on the Algerian War of Independence",
        "Debates over his relationship to existentialism and Sartre",
        "Criticisms of his portrayal of Arab characters in 'The Stranger'",
        "His break with Sartre over political differences",
        "Discussions about the evolution of his thought from absurdism to humanism",
        "Interpretations of his concept of revolt in political contexts"
      ],
      legacy: [
        "His concept of the absurd continues to influence philosophy and popular culture",
        "'The Stranger' and 'The Plague' are widely read and studied in literature courses",
        "His ethical stance of 'neither victims nor executioners' remains relevant in political discourse",
        "His ideas on revolt and freedom have inspired civil rights and anti-authoritarian movements",
        "His literary style has influenced generations of writers",
        "His life and work embody the engaged intellectual in the face of historical challenges"
      ],
      year: "1913",
      connections: ["Jean-Paul Sartre", "Simone de Beauvoir", "Franz Kafka", "Fyodor Dostoevsky", "Friedrich Nietzsche", "André Malraux"],
      imageUrl: "/images/camus.jpg",
      timeline: [
        { year: 1913, event: "Born in Mondovi, French Algeria" },
        { year: 1940, event: "Moves to Paris; joins the French Resistance during World War II" },
        { year: 1942, event: "Publishes 'The Stranger' and 'The Myth of Sisyphus'" },
        { year: 1947, event: "Publishes 'The Plague'" },
        { year: 1951, event: "Publishes 'The Rebel'" },
        { year: 1957, event: "Awarded the Nobel Prize in Literature" },
        { year: 1960, event: "Dies in a car accident in Villeblevin, France" }
      ]
    },
    {
      fullName: "Confucius (孔子, Kǒng Zǐ)",
      lifespan: "551 BCE - 479 BCE",
      nationality: "Chinese",
      era: "Ancient Chinese philosophy",
      concepts: [
        "ren (仁, benevolence/humaneness)",
        "li (禮, propriety/etiquette)",
        "yi (義, righteousness)",
        "xiao (孝, filial piety)",
        "junzi (君子, gentleman/exemplary person)",
        "zhong (忠, loyalty)",
        "zheng ming (正名, rectification of names)",
        "dao (道, the Way)",
        "de (德, virtue)",
        "he (和, harmony)"
      ],
      framework: "Confucianism",
      majorWorks: [
        "The Analects (Lunyu)",
        "Five Classics (edited by Confucius):",
        "- Classic of Poetry (Shijing)",
        "- Book of Documents (Shujing)",
        "- Book of Rites (Liji)",
        "- I Ching (Yijing)",
        "- Spring and Autumn Annals (Chunqiu)"
      ],
      quotes: [
        "It does not matter how slowly you go as long as you do not stop.",
        "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.",
        "The man who moves a mountain begins by carrying away small stones."
      ],
      personality: "Wise, ethical, and focused on social harmony and personal cultivation",
      context: "Lived during the Spring and Autumn period of ancient China, a time of political fragmentation and social change",
      style: "Teaching through dialogues, aphorisms, and personal example",
      keyIdeas: [
        "The importance of moral cultivation and self-improvement",
        "The role of ritual and propriety in maintaining social order",
        "The concept of the 'gentleman' or 'exemplary person' as a moral ideal",
        "The importance of filial piety and respect for elders and ancestors",
        "The idea that social harmony is achieved through proper relationships and roles",
        "The belief in the power of education and learning",
        "The importance of moral leadership in government",
        "The concept of 'rectification of names' - the idea that social order requires clear definitions of roles and duties",
        "The emphasis on virtues such as benevolence, righteousness, and loyalty",
        "The idea of the 'Mandate of Heaven' in legitimizing rule"
      ],
      influence: [
        "Foundational figure in Chinese philosophy and culture",
        "His teachings formed the basis of the Chinese imperial examination system",
        "Confucianism became the state ideology of China for much of its history",
        "Profoundly influenced social, political, and educational systems in East Asia",
        "His emphasis on family and social harmony continues to shape East Asian societies",
        "His ideas on governance and ethics have influenced political thought worldwide"
      ],
      controversies: [
        "Debates over the authenticity of texts attributed to Confucius",
        "Criticisms of Confucianism as promoting social hierarchy and gender inequality",
        "Discussions about the compatibility of Confucian values with modernization and democracy",
        "The role of Confucianism in reinforcing authoritarian governance",
        "Interpretations of Confucian thought in relation to other philosophical traditions",
        "The suppression and later revival of Confucianism in modern China"
      ],
      legacy: [
        "Confucianism remains a major influence in East Asian cultures",
        "His teachings continue to be studied and debated worldwide",
        "The Confucian emphasis on education has shaped educational systems in many countries",
        "Confucian concepts of harmony and social order influence modern political discourse",
        "His ideas on self-cultivation and moral development continue to inspire personal growth philosophies",
        "Confucian ethics have been integrated into various aspects of business and governance in East Asia"
      ],
      year: "-551",
      connections: ["Mencius", "Xunzi", "Laozi", "Zhuangzi", "Han Feizi", "Dong Zhongshu"],
      imageUrl: "/images/confucius.jpg",
      timeline: [
        { year: -551, event: "Born in the state of Lu (modern Shandong province)" },
        { year: -501, event: "Appointed Governor of a town in Lu" },
        { year: -497, event: "Leaves Lu and begins period of traveling and teaching" },
        { year: -484, event: "Returns to Lu and focuses on teaching and writing" },
        { year: -479, event: "Dies in Lu" },
        { year: -400, event: "The Analects compiled by his disciples (approximate date)" },
        { year: -200, event: "Confucianism becomes the state ideology of the Han Dynasty (approximate date)" }
      ]
    },
    {
      fullName: "René Descartes",
      lifespan: "1596-1650",
      nationality: "French",
      era: "Early modern philosophy",
      concepts: [
        "Cartesian doubt",
        "cogito ergo sum",
        "mind-body dualism",
        "rationalism",
        "innate ideas",
        "method of doubt",
        "Cartesian coordinates",
        "mechanistic worldview",
        "clear and distinct ideas",
        "ontological argument for God's existence"
      ],
      framework: "Cartesian philosophy",
      majorWorks: [
        "Discourse on the Method",
        "Meditations on First Philosophy",
        "Principles of Philosophy",
        "Rules for the Direction of the Mind",
        "The World",
        "Passions of the Soul",
        "La Géométrie"
      ],
      quotes: [
        "I think, therefore I am. (Cogito, ergo sum.)",
        "It is not enough to have a good mind; the main thing is to use it well.",
        "The reading of all good books is like conversation with the finest men of past centuries."
      ],
      personality: "Skeptical, methodical, and introspective",
      context: "17th-century French philosopher, mathematician, and scientist during the Scientific Revolution",
      style: "Systematic doubt, clear and rigorous argumentation, mathematical approach to philosophy",
      keyIdeas: [
        "Methodic doubt: systematically doubting everything that can be doubted",
        "Cogito ergo sum: 'I think, therefore I am' as the foundation of knowledge",
        "Mind-body dualism: the mind and body are distinct substances",
        "Innate ideas: some ideas are innate to the mind, not derived from experience",
        "Rationalism: reason as the primary source of knowledge",
        "Clear and distinct ideas as the criterion for truth",
        "Mechanistic view of nature: the physical world operates like a machine",
        "The ontological argument for God's existence",
        "The evil demon hypothesis: a thought experiment to push skepticism to its limits",
        "The invention of analytic geometry and Cartesian coordinates"
      ],
      influence: [
        "Considered the father of modern Western philosophy",
        "Laid the foundations for 17th-century continental rationalism",
        "His work was crucial in the development of the scientific method",
        "Greatly influenced subsequent philosophers, including Spinoza and Leibniz",
        "His mathematical work revolutionized geometry and laid the groundwork for calculus",
        "His mechanistic worldview influenced the development of modern science"
      ],
      controversies: [
        "Critiques of his mind-body dualism and its implications",
        "Debates over the validity of his ontological argument for God's existence",
        "Accusations of circular reasoning in his overall philosophical system",
        "Conflicts with the Catholic Church over his works",
        "Criticisms of his vivisection of animals and mechanistic view of animal nature",
        "Debates over the extent of his originality in mathematics and philosophy"
      ],
      legacy: [
        "His method of systematic doubt became a fundamental element of philosophical inquiry",
        "The Cartesian coordinate system is still widely used in mathematics and science",
        "His emphasis on reason and skepticism influenced the Enlightenment",
        "The phrase 'Cogito, ergo sum' has become one of the best-known in Western philosophy",
        "His work laid the foundation for modern rationalist and representationalist theories in cognitive science",
        "His ideas continue to be central to debates in philosophy of mind and epistemology"
      ],
      year: "1596",
      connections: ["Galileo Galilei", "Blaise Pascal", "Baruch Spinoza", "Gottfried Wilhelm Leibniz", "Isaac Newton", "Immanuel Kant"],
      imageUrl: "/images/descartes.jpg",
      timeline: [
        { year: 1596, event: "Born in La Haye en Touraine (now Descartes), France" },
        { year: 1616, event: "Receives law degree from the University of Poitiers" },
        { year: 1618, event: "Joins the Dutch States Army of Maurice of Nassau" },
        { year: 1619, event: "Has three pivotal dreams that set the course of his future work" },
        { year: 1637, event: "Publishes 'Discourse on the Method'" },
        { year: 1641, event: "Publishes 'Meditations on First Philosophy'" },
        { year: 1649, event: "Moves to Stockholm at the invitation of Queen Christina of Sweden" },
        { year: 1650, event: "Dies in Stockholm" }
      ]
    },
    {
      fullName: "Paul-Michel Foucault",
      lifespan: "1926-1984",
      nationality: "French",
      era: "20th-century philosophy",
      concepts: [
        "power-knowledge",
        "discourse",
        "genealogy",
        "archaeology",
        "biopolitics",
        "governmentality",
        "panopticism",
        "heterotopia",
        "technologies of the self",
        "episteme"
      ],
      framework: "Post-structuralism",
      majorWorks: [
        "Madness and Civilization",
        "The Birth of the Clinic",
        "The Order of Things",
        "The Archaeology of Knowledge",
        "Discipline and Punish",
        "The History of Sexuality (3 volumes)",
        "Power/Knowledge",
        "The Use of Pleasure"
      ],
      quotes: [
        "Where there is power, there is resistance.",
        "Knowledge is not for knowing: knowledge is for cutting.",
        "I don't feel that it is necessary to know exactly what I am. The main interest in life and work is to become someone else that you were not in the beginning."
      ],
      personality: "Intellectually adventurous, provocative, and politically engaged",
      context: "Post-war France; May 1968 protests; gay rights movement; structuralism and post-structuralism",
      style: "Historical analysis combined with philosophical inquiry; challenges conventional understandings of social institutions and practices",
      keyIdeas: [
        "Power is not merely repressive but productive, creating knowledge and discourse",
        "Knowledge and power are inextricably linked, forming 'power-knowledge'",
        "Discourse shapes reality, determining what can be said and thought in a given era",
        "Genealogy as a method of historical analysis that reveals the contingency of present practices",
        "Biopolitics: the regulation and control of populations through various techniques",
        "The panopticon as a model for understanding modern systems of surveillance and control",
        "Critique of the 'repressive hypothesis' in understanding sexuality",
        "The 'care of the self' as an ethical practice",
        "Governmentality: the way governments try to produce citizens best suited to fulfill their policies",
        "The shift from sovereign power to disciplinary power in modern societies"
      ],
      influence: [
        "Profoundly influenced post-structuralism and postmodern thought",
        "His work on power and knowledge has been crucial in sociology, cultural studies, and literary theory",
        "His analyses of sexuality and gender have been foundational for queer theory",
        "His concept of biopolitics has influenced political theory and bioethics",
        "His methods have been applied in various fields, including education, criminology, and public health",
        "His critique of institutions has informed social and political movements"
      ],
      controversies: [
        "Debates over his relativist stance on truth and knowledge",
        "Criticisms of his historical accuracy in some of his analyses",
        "Discussions about the political implications of his theories of power",
        "His stance on the Iranian Revolution",
        "Debates over the compatibility of his earlier and later works",
        "Criticisms of his writing style as overly complex or obscure"
      ],
      legacy: [
        "His concepts of power, knowledge, and discourse continue to be widely used across academic disciplines",
        "His critiques of social institutions have influenced reforms in mental health, criminal justice, and education",
        "His work on sexuality has been crucial in LGBTQ+ studies and activism",
        "His methodological approaches continue to inspire new forms of historical and social analysis",
        "His ideas have been influential in postcolonial studies and critiques of neoliberalism",
        "His concept of biopolitics has gained renewed relevance in discussions of public health and surveillance"
      ],
      year: "1926",
      connections: ["Gilles Deleuze", "Jacques Derrida", "Jean-Paul Sartre", "Georges Canguilhem", "Louis Althusser", "Judith Butler"],
      imageUrl: "/images/foucault.jpg",
      timeline: [
        { year: 1926, event: "Born in Poitiers, France" },
        { year: 1954, event: "Publishes first book, 'Mental Illness and Personality'" },
        { year: 1961, event: "Publishes 'Madness and Civilization'" },
        { year: 1966, event: "Publishes 'The Order of Things', gaining widespread recognition" },
        { year: 1970, event: "Elected to the Collège de France" },
        { year: 1975, event: "Publishes 'Discipline and Punish'" },
        { year: 1976, event: "Publishes first volume of 'The History of Sexuality'" },
        { year: 1984, event: "Dies in Paris; final two volumes of 'The History of Sexuality' published posthumously" }
      ]
    },
    {
      fullName: "Franz Kafka",
      lifespan: "1883-1924",
      nationality: "Bohemian (Czech, then part of Austria-Hungary)",
      era: "Early 20th century literature and philosophy",
      concepts: [
        "absurdism",
        "existentialism",
        "alienation",
        "bureaucracy",
        "guilt",
        "anxiety",
        "transformation",
        "father-son conflict",
        "Jewish identity",
        "modernism"
      ],
      framework: "Kafkaesque",
      majorWorks: [
        "The Metamorphosis",
        "The Trial",
        "The Castle",
        "In the Penal Colony",
        "A Hunger Artist",
        "Letter to His Father",
        "The Judgment"
      ],
      quotes: [
        "A book must be the axe for the frozen sea within us.",
        "I am a cage, in search of a bird.",
        "Don't bend; don't water it down; don't try to make it logical; don't edit your own soul according to the fashion. Rather, follow your most intense obsessions mercilessly."
      ],
      personality: "Introspective, anxious, and darkly humorous",
      context: "Early 20th-century Prague; Jewish in a predominantly Christian society; wrote during the decline of the Austro-Hungarian Empire",
      style: "Surreal and nightmarish scenarios; precise, matter-of-fact prose; exploration of psychological extremes",
      keyIdeas: [
        "The absurdity of human existence in an incomprehensible universe",
        "Alienation of the individual in modern society",
        "Critique of bureaucracy and authoritarian systems",
        "The struggle with guilt and judgment",
        "Transformation and metamorphosis as metaphors for the human condition",
        "The complex relationship between the individual and authority",
        "The impossibility of true communication and understanding",
        "The conflict between the individual and family, especially father-son relationships",
        "The experience of being an outsider, both as a Jew and as an individual",
        "The futility of human efforts in the face of an indifferent or hostile world"
      ],
      influence: [
        "Pioneered a new form of modernist literature",
        "Significantly influenced existentialist and absurdist philosophy and literature",
        "Coined the term 'Kafkaesque' to describe absurd and nightmarish situations",
        "Inspired numerous writers, filmmakers, and artists",
        "His work has been widely interpreted in psychological and sociological contexts",
        "Contributed to the development of magical realism in literature"
      ],
      controversies: [
        "The publication of his unfinished works against his dying wishes",
        "Debates over the autobiographical nature of his writing",
        "Interpretations of his work as prophetic of totalitarian regimes",
        "Discussions about the role of his Jewish identity in his writing",
        "Controversies over the best way to translate his precise German prose",
        "Debates about the extent to which his work should be read as allegory or taken literally"
      ],
      legacy: [
        "Recognized as one of the most influential authors of the 20th century",
        "His name has become an adjective, 'Kafkaesque', describing absurd and nightmarish situations",
        "His works continue to be widely read, studied, and adapted",
        "Has had a lasting impact on the depiction of bureaucracy and alienation in literature and film",
        "His exploration of existential themes has influenced philosophy and psychology",
        "His unique style has inspired generations of writers to explore surreal and absurdist themes"
      ],
      year: "1883",
      connections: ["Albert Camus", "Jean-Paul Sartre", "Samuel Beckett", "Gabriel García Márquez", "Jorge Luis Borges", "Milan Kundera"],
      imageUrl: "/images/kafka.jpg",
      timeline: [
        { year: 1883, event: "Born in Prague, Bohemia (now Czech Republic)" },
        { year: 1901, event: "Begins studying law at Charles-Ferdinand University in Prague" },
        { year: 1906, event: "Receives his doctorate in law" },
        { year: 1912, event: "Writes 'The Judgment' in a single night, a turning point in his writing" },
        { year: 1915, event: "Publishes 'The Metamorphosis'" },
        { year: 1917, event: "Diagnosed with tuberculosis" },
        { year: 1924, event: "Dies in Kierling, near Vienna, Austria" },
        { year: 1925, event: "'The Trial' published posthumously by Max Brod" }
      ]
    },
    {
      fullName: "Immanuel Kant",
      lifespan: "1724-1804",
      nationality: "Prussian (now German)",
      era: "Age of Enlightenment",
      concepts: [
        "categorical imperative",
        "transcendental idealism",
        "synthetic a priori knowledge",
        "autonomy of the will",
        "phenomenal and noumenal worlds",
        "critique of pure reason",
        "duty-based ethics",
        "perpetual peace",
        "copernican revolution in philosophy",
        "thing-in-itself"
      ],
      framework: "Critical philosophy",
      majorWorks: [
        "Critique of Pure Reason",
        "Critique of Practical Reason",
        "Critique of Judgment",
        "Groundwork of the Metaphysics of Morals",
        "Perpetual Peace: A Philosophical Sketch"
      ],
      quotes: [
        "Act only according to that maxim by which you can at the same time will that it should become a universal law.",
        "Two things fill the mind with ever new and increasing admiration and awe, the oftener and more steadily we reflect on them: the starry heavens above and the moral law within.",
        "Sapere aude! (Dare to know!)"
      ],
      personality: "Rigorous, systematic, intellectually curious, and morally principled",
      context: "18th-century German philosopher, key figure of the Enlightenment, professor at the University of Königsberg",
      style: "Employs complex arguments and introduces new philosophical terminology; known for his systematic approach",
      keyIdeas: [
        "The synthetic a priori: knowledge that is both necessary and knowable independently of experience",
        "Transcendental idealism: space and time are forms of intuition, not properties of things in themselves",
        "The categorical imperative: a supreme principle of morality based on reason alone",
        "The autonomy of the will: moral agents are bound only by their own, self-imposed laws",
        "The thing-in-itself: reality as it is independent of human perception",
        "Perpetual peace: a philosophical concept for a sustainable peace program"
      ],
      influence: [
        "Bridged the gap between rationalist and empiricist traditions",
        "Influenced nearly all subsequent Western philosophy",
        "Shaped modern concepts of human rights and international relations",
        "Contributed to the development of German Idealism"
      ],
      controversies: [
        "Criticized for the difficulty and obscurity of his writing style",
        "His views on race and gender have been subject to modern criticism",
        "The interpretation of his transcendental idealism remains disputed"
      ],
      legacy: [
        "Considered one of the most influential philosophers in the Western tradition",
        "His ethical theory continues to be a major approach in moral philosophy",
        "His critiques of metaphysics set the tone for much of 19th and 20th century philosophy",
        "His political philosophy influenced the development of modern liberalism and international law"
      ],
      year: "1724",
      connections: ["David Hume", "Jean-Jacques Rousseau", "Johann Gottfried Herder", "Johann Gottlieb Fichte", "Georg Wilhelm Friedrich Hegel"],
      imageUrl: "/images/kant.jpg",
      timeline: [
        { year: 1724, event: "Born in Königsberg, Prussia" },
        { year: 1755, event: "Completed his doctorate and began lecturing at the University of Königsberg" },
        { year: 1770, event: "Appointed Professor of Logic and Metaphysics at Königsberg" },
        { year: 1781, event: "Published Critique of Pure Reason" },
        { year: 1785, event: "Published Groundwork of the Metaphysics of Morals" },
        { year: 1788, event: "Published Critique of Practical Reason" },
        { year: 1804, event: "Died in Königsberg" }
      ]
    },
    {
      fullName: "Lao Tzu (老子, Lǎozǐ, meaning 'Old Master')",
      lifespan: "6th century BCE (traditionally 571-471 BCE, exact dates uncertain)",
      nationality: "Chinese",
      era: "Ancient Chinese philosophy",
      concepts: [
        "Tao (道, the Way)",
        "Wu wei (無為, non-action)",
        "Pu (朴, simplicity)",
        "Te (德, virtue/power)",
        "Ziran (自然, naturalness)",
        "Yin and Yang (陰陽, complementary opposites)",
        "Qi (氣, life force)",
        "Wu (無, nothingness)",
        "Spontaneity",
        "Relativism"
      ],
      framework: "Taoism",
      majorWorks: [
        "Tao Te Ching (道德經, Dàodé Jīng)"
      ],
      quotes: [
        "The journey of a thousand miles begins with one step.",
        "When you are content to be simply yourself and don't compare or compete, everyone will respect you.",
        "The Tao that can be told is not the eternal Tao. The name that can be named is not the eternal name."
      ],
      personality: "Mystical, contemplative, and in tune with nature",
      context: "Lived during the Spring and Autumn period of ancient China, a time of philosophical flourishing",
      style: "Uses poetic and often paradoxical language to convey profound philosophical insights",
      keyIdeas: [
        "The Tao as the underlying principle of the universe, beyond description or comprehension",
        "Wu wei (non-action) as a principle of effortless action in harmony with the Tao",
        "The virtues of simplicity, spontaneity, and naturalness",
        "The interplay and balance of opposing forces (yin and yang)",
        "Critique of conventional knowledge and societal norms",
        "The power of emptiness and the usefulness of what is not there",
        "The idea that softness and flexibility overcome hardness and rigidity",
        "The concept of 'reversal' in the Tao, where extremes transform into their opposites",
        "The ruler should govern with minimal interference, like the Tao operates in nature",
        "The importance of returning to one's original nature"
      ],
      influence: [
        "Founder of Taoism, one of the major philosophical and religious traditions of China",
        "Profoundly influenced Chinese culture, art, literature, and spirituality",
        "Contributed to the development of Chinese medicine and martial arts",
        "Influenced the development of Chan (Zen) Buddhism",
        "His ideas on governance have been applied in various political contexts",
        "Taoism has gained popularity in the West, influencing various New Age movements"
      ],
      controversies: [
        "Debates over the historical existence of Lao Tzu",
        "Questions about the authorship and dating of the Tao Te Ching",
        "Interpretations of Taoist philosophy as quietism or passivity",
        "The relationship between philosophical Taoism and religious Taoism",
        "Different schools of thought in interpreting key Taoist concepts",
        "The compatibility of Taoist thought with modern science and technology"
      ],
      legacy: [
        "The Tao Te Ching is one of the most translated works in world literature",
        "Taoist concepts have influenced Chinese politics, medicine, and art for millennia",
        "Taoism continues to be practiced as both a philosophy and a religion",
        "Taoist ideas have been influential in environmental and ecological movements",
        "Concepts like wu wei have been applied in fields ranging from management to sports psychology",
        "Taoist philosophy has contributed to cross-cultural dialogue between East and West"
      ],
      year: "-571",
      connections: ["Confucius", "Zhuangzi", "Buddha", "Heraclitus", "Alan Watts", "Carl Jung"],
      imageUrl: "/images/lao-tzu.jpg",
      timeline: [
        { year: -571, event: "Traditional birth year (historically uncertain)" },
        { year: -551, event: "Birth of Confucius (for historical context)" },
        { year: -500, event: "Approximate time the Tao Te Ching may have been written (dating is debated)" },
        { year: -471, event: "Traditional death year (historically uncertain)" },
        { year: -300, event: "Zhuangzi expands on Taoist philosophy" },
        { year: 142, event: "Zhang Daoling founds religious Taoism" },
        { year: 1972, event: "Discovery of the Mawangdui silk texts, including early versions of the Tao Te Ching" }
      ]
    },
    {
      fullName: "Marcus Aurelius Antoninus Augustus",
      lifespan: "121 CE - 180 CE",
      nationality: "Roman",
      era: "Ancient Roman philosophy, Late Stoicism",
      concepts: [
        "Stoicism",
        "virtue ethics",
        "cosmopolitanism",
        "rational self-discipline",
        "mindfulness",
        "acceptance of fate",
        "inner citadel",
        "impermanence",
        "logos",
        "memento mori"
      ],
      framework: "Stoic philosophy",
      majorWorks: [
        "Meditations (Ta eis heauton)",
      ],
      quotes: [
        "You have power over your mind - not outside events. Realize this, and you will find strength.",
        "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
        "The happiness of your life depends upon the quality of your thoughts."
      ],
      personality: "Introspective, disciplined, dutiful, and morally principled",
      context: "Roman Emperor from 161 to 180 CE, wrote personal reflections during military campaigns",
      style: "Personal meditations and self-exhortations; practical application of Stoic principles",
      keyIdeas: [
        "Focus on what is within one's control, primarily one's own thoughts and actions",
        "Acceptance of the natural order of the universe (logos)",
        "Duty and service to others as central to a virtuous life",
        "Impermanence of all things and the importance of living in the present",
        "Rational approach to emotions and external events",
        "Cosmopolitanism: viewing all humans as fellow citizens of the world",
        "Virtue as the only true good, and vice as the only true evil",
        "Self-reflection and continuous ethical improvement",
        "Memento mori: remembering one's mortality as a motivation for virtuous living",
        "The universe as a single, divine, and rational entity"
      ],
      influence: [
        "Considered one of the most important Stoic philosophers",
        "His 'Meditations' has been a source of inspiration for leaders and thinkers for centuries",
        "Contributed to the revival of interest in Stoicism in modern times",
        "Influenced the development of cognitive behavioral therapy",
        "His ideas on duty and public service have impacted political philosophy",
        "Popularized Stoic practices for personal growth and resilience"
      ],
      controversies: [
        "Persecutions of Christians during his reign, despite his reputation for justice",
        "Appointment of his son Commodus as heir, departing from the previous system of adopted heirs",
        "Debates over the intended audience of 'Meditations' (personal vs. public)",
        "Criticisms of Stoicism as promoting passivity in the face of injustice",
        "Questions about the practicality of Stoic ideals in everyday life"
      ],
      legacy: [
        "Exemplar of the philosopher-king ideal in Western tradition",
        "'Meditations' remains widely read as a practical guide to ethics and self-improvement",
        "Contributed to the enduring influence of Stoicism in Western philosophy",
        "His rule is often seen as the high point of the Pax Romana",
        "Inspirational figure for leaders seeking to combine power with wisdom and virtue",
        "His writings have influenced modern self-help and mindfulness movements"
      ],
      year: "121",
      connections: ["Epictetus", "Seneca", "Cicero", "Hadrian", "Antoninus Pius", "Commodus"],
      imageUrl: "/images/marcus-aurelius.jpg",
      timeline: [
        { year: 121, event: "Born in Rome" },
        { year: 138, event: "Adopted by Antoninus Pius, becoming heir to the empire" },
        { year: 161, event: "Becomes Roman Emperor" },
        { year: 166, event: "Co-rule with Lucius Verus begins" },
        { year: 169, event: "Death of Lucius Verus; sole rule begins" },
        { year: 175, event: "Suppresses the revolt of Avidius Cassius" },
        { year: 180, event: "Dies at Vindobona (modern Vienna) during a military campaign" }
      ]
    },
    {
      fullName: "Friedrich Wilhelm Nietzsche",
      lifespan: "1844-1900",
      nationality: "German",
      era: "19th-century philosophy",
      concepts: [
        "will to power",
        "eternal recurrence",
        "übermensch",
        "master-slave morality",
        "perspectivism",
        "nihilism",
        "death of God",
        "amor fati",
        "revaluation of all values",
        "genealogy of morals"
      ],
      framework: "Existentialism and Post-modernism (precursor)",
      majorWorks: [
        "The Birth of Tragedy",
        "Thus Spoke Zarathustra",
        "Beyond Good and Evil",
        "On the Genealogy of Morality",
        "The Gay Science",
        "Ecce Homo"
      ],
      quotes: [
        "God is dead. God remains dead. And we have killed him.",
        "He who has a why to live can bear almost any how.",
        "There are no facts, only interpretations."
      ],
      personality: "Passionate, provocative, iconoclastic, and psychologically insightful",
      context: "19th-century German philosopher, cultural critic, composer, and philologist; wrote during a time of rapid industrialization and social change in Europe",
      style: "Uses aphorisms, metaphors, and poetic language; employs a unique, often confrontational writing style to challenge conventional thinking",
      keyIdeas: [
        "The will to power as a fundamental drive in humans and all of nature",
        "Eternal recurrence: the idea that one should live as if they'll have to relive their life eternally",
        "The übermensch (overman) as an ideal of human excellence and self-overcoming",
        "Critique of traditional morality as 'slave morality'",
        "Perspectivism: the view that all ideations take place from particular perspectives",
        "The death of God and its implications for morality and meaning",
        "Amor fati: the love and acceptance of one's fate"
      ],
      influence: [
        "Profoundly influenced existentialist and postmodernist thought",
        "Impacted various fields including philosophy, literature, psychology, and religious studies",
        "Influenced thinkers such as Martin Heidegger, Jean-Paul Sartre, Michel Foucault, and Gilles Deleuze",
        "His ideas have been widely, though often controversially, interpreted and applied in various contexts"
      ],
      controversies: [
        "His works were misappropriated by the Nazi regime, leading to misconceptions about his philosophy",
        "His critique of Christianity and traditional morality has been a source of controversy",
        "The concept of the 'will to power' has been variously interpreted and debated",
        "His writings on women have been criticized as misogynistic"
      ],
      legacy: [
        "Considered one of the most influential philosophers of modern times",
        "His critique of traditional values and emphasis on life-affirmation continue to resonate",
        "His writing style and use of aphorisms have influenced philosophical and literary expression",
        "His ideas have been influential in various fields, from philosophy and psychology to literature and art"
      ],
      year: "1844",
      connections: ["Arthur Schopenhauer", "Richard Wagner", "Fyodor Dostoevsky", "Martin Heidegger", "Jean-Paul Sartre", "Michel Foucault"],
      imageUrl: "/images/nietzsche.jpg",
      timeline: [
        { year: 1844, event: "Born in Röcken, Prussia" },
        { year: 1869, event: "Appointed professor of classical philology at the University of Basel at the age of 24" },
        { year: 1872, event: "Published his first book, The Birth of Tragedy" },
        { year: 1879, event: "Retired from teaching due to health issues" },
        { year: 1883, event: "Began writing Thus Spoke Zarathustra" },
        { year: 1889, event: "Suffered a mental breakdown in Turin" },
        { year: 1900, event: "Died in Weimar, Germany" }
      ],
    },
    {
      fullName: "Plato (Πλάτων)",
      lifespan: "c. 428/427 BCE - 348/347 BCE",
      nationality: "Athenian (Greek)",
      era: "Ancient Greek philosophy",
      concepts: [
        "theory of Forms",
        "philosopher-king",
        "allegory of the cave",
        "Platonic idealism",
        "anamnesis",
        "dialectic",
        "tripartite soul",
        "cardinal virtues",
        "immortality of the soul",
        "divided line"
      ],
      framework: "Platonic philosophy",
      majorWorks: [
        "The Republic",
        "Symposium",
        "Phaedo",
        "Timaeus",
        "Theaetetus",
        "Phaedrus",
        "Meno",
        "Apology",
        "Crito",
        "Laws"
      ],
      quotes: [
        "The greatest wealth is to live content with little.",
        "Be kind, for everyone you meet is fighting a hard battle.",
        "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light."
      ],
      personality: "Visionary, idealistic, and metaphorically inclined",
      context: "Student of Socrates, teacher of Aristotle, founder of the Academy in Athens",
      style: "Dialogues featuring Socrates as the main character; uses allegories and myths to convey complex ideas",
      keyIdeas: [
        "Theory of Forms: true reality consists of eternal, unchanging Forms or Ideas",
        "Philosopher-king: the ideal ruler is a philosopher with knowledge of the Good",
        "Allegory of the Cave: illustrates the nature of reality and human perception",
        "Tripartite soul: the soul consists of reason, spirit, and appetite",
        "Anamnesis: learning is recollection of knowledge from past lives",
        "Justice: harmony between the three parts of the soul and the state",
        "Immortality of the soul: the soul is eternal and exists before and after bodily life",
        "Education: crucial for developing virtuous citizens and leaders",
        "Mimesis: art is an imitation of the physical world, which is itself an imitation of the Forms",
        "Dialectic: method of philosophical inquiry through question and answer"
      ],
      influence: [
        "Foundational figure in Western philosophy and science",
        "His works shaped the development of metaphysics, ethics, and political theory",
        "Influenced Neoplatonism, Christian theology, and Islamic philosophy",
        "His concept of Platonic love has been influential in literature and culture",
        "His political ideas have been debated and applied throughout history",
        "The Academy he founded lasted for centuries and inspired later institutions"
      ],
      controversies: [
        "His critique of democracy and support for a philosopher-king",
        "The feasibility and desirability of the ideal state described in The Republic",
        "The metaphysical status of the Forms and their relation to physical reality",
        "His views on the role of art and poetry in society",
        "Debates over the evolution of his thought across different dialogues",
        "The extent to which the views expressed by Socrates in the dialogues represent Plato's own views"
      ],
      legacy: [
        "Often regarded as the founder of Western political philosophy",
        "His dialogues are still widely read and studied in philosophy and classics",
        "The concept of Platonic love has had a lasting impact on Western culture",
        "His metaphysical theories have influenced various philosophical and religious traditions",
        "The educational ideas in The Republic have been influential in pedagogical theory",
        "His use of dialogue as a philosophical method has inspired later thinkers and writers"
      ],


      year: "-428",
      connections: ["Socrates", "Aristotle", "Pythagoras", "Parmenides", "Plotinus", "St. Augustine"],
      imageUrl: "/images/plato.jpg",
      timeline: [
        { year: -428, event: "Born in Athens (approximate date)" },
        { year: -407, event: "Meets Socrates and becomes his student" },
        { year: -399, event: "Witnesses the trial and execution of Socrates" },
        { year: -387, event: "Founds the Academy in Athens" },
        { year: -367, event: "Aristotle joins the Academy" },
        { year: -347, event: "Dies in Athens" }
      ]
    },
    {
      fullName: "Jean-Paul Charles Aymard Sartre",
      lifespan: "1905-1980",
      nationality: "French",
      era: "20th-century philosophy",
      concepts: [
        "existentialism",
        "freedom",
        "responsibility",
        "bad faith",
        "nothingness",
        "being-for-itself",
        "being-in-itself",
        "authenticity",
        "engagement",
        "phenomenology"
      ],
      framework: "Existentialism",
      majorWorks: [
        "Being and Nothingness",
        "Existentialism Is a Humanism",
        "Nausea",
        "No Exit",
        "Critique of Dialectical Reason",
        "The Words"
      ],
      quotes: [
        "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.",
        "Hell is other people.",
        "Existence precedes essence."
      ],
      personality: "Intense, politically engaged, and intellectually rigorous",
      context: "20th-century French philosopher, playwright, novelist, political activist, biographer, and literary critic",
      style: "Combines dense philosophical treatises with literary works to explore existential themes; known for making philosophy accessible through literature and essays",
      keyIdeas: [
        "Existence precedes essence: humans first exist and then create their own essence through their choices and actions",
        "Radical freedom: humans are utterly free and thus utterly responsible for their choices",
        "Bad faith: the self-deception whereby a person attempts to flee from freedom and responsibility",
        "Being-for-itself (consciousness) vs. Being-in-itself (non-conscious objects)",
        "The look: how the gaze of others objectifies and alienates the self",
        "Engagement: the necessity of committed action in the world",
        "Critique of traditional Marxism and attempt to reconcile existentialism with historical materialism"
      ],
      influence: [
        "Central figure in the development and popularization of existentialism",
        "Significantly influenced post-war French philosophy and global intellectual culture",
        "Impacted fields beyond philosophy, including literature, psychology, and political theory",
        "His ideas on freedom and responsibility continue to be debated in ethics and political philosophy"
      ],
      controversies: [
        "His support for communism and the Soviet Union, which he later criticized",
        "The nature of his relationship with Simone de Beauvoir and their unconventional lifestyle",
        "His refusal of the Nobel Prize for Literature in 1964",
        "Debates over the coherence and implications of his philosophy of radical freedom"
      ],
      legacy: [
        "Considered one of the most influential philosophers of the 20th century",
        "His literary works continue to be widely read and studied",
        "His concept of engaged literature influenced generations of writers",
        "His emphasis on individual freedom and responsibility remains central to existentialist thought"
      ],
      year: "1905",
      connections: ["Simone de Beauvoir", "Albert Camus", "Martin Heidegger", "Edmund Husserl", "Maurice Merleau-Ponty", "Friedrich Nietzsche"],
      imageUrl: "/images/sartre.jpg",
      timeline: [
        { year: 1905, event: "Born in Paris, France" },
        { year: 1929, event: "Meets Simone de Beauvoir, beginning a lifelong personal and intellectual partnership" },
        { year: 1938, event: "Publishes his first novel, Nausea" },
        { year: 1943, event: "Publishes Being and Nothingness, his major philosophical work" },
        { year: 1945, event: "Gives the lecture Existentialism Is a Humanism" },
        { year: 1964, event: "Awarded the Nobel Prize in Literature, which he declines" },
        { year: 1980, event: "Dies in Paris, with 50,000 people attending his funeral" }
      ]
    },
    {
      fullName: "Socrates",
      lifespan: "c. 470-399 BCE",
      nationality: "Athenian (Greek)",
      era: "Classical Greece",
      concepts: [
        "Socratic method",
        "ethical intellectualism",
        "self-examination",
        "pursuit of wisdom",
        "questioning assumptions",
        "critical thinking",
        "moral excellence",
        "know thyself"
      ],
      framework: "Socratic philosophy",
      majorWorks: [
        "No written works (teachings preserved through his students, primarily Plato)",
        "Plato's dialogues (e.g., Apology, Crito, Phaedo)",
        "Xenophon's Memorabilia"
      ],
      quotes: [
        "The unexamined life is not worth living.",
        "I know that I know nothing.",
        "By all means marry; if you get a good wife, you'll become happy; if you get a bad one, you'll become a philosopher."
      ],
      personality: "Inquisitive, humble, persistent in questioning, and morally upright",
      context: "Lived during the Golden Age of Athens; contemporary of the Sophists; executed for impiety and corrupting the youth",
      style: "Used questions to lead interlocutors to their own realizations; engaged in philosophical discussions in public spaces",
      keyIdeas: [
        "The importance of self-knowledge and continuous self-examination",
        "Virtue is knowledge, and those who know the good will do the good",
        "The Socratic method: a form of cooperative argumentative dialogue based on asking and answering questions",
        "Skepticism towards those who claim to have certain knowledge",
        "The pursuit of wisdom as the highest goal of human life",
        "The idea that true wisdom is recognizing the limits of one's knowledge",
        "Emphasis on ethics and how one ought to live"
      ],
      influence: [
        "Considered one of the founders of Western philosophy",
        "His method of questioning influenced the development of critical thinking and logic",
        "Inspired the development of various philosophical schools, including Platonism and Cynicism",
        "His approach to ethics has been influential in moral philosophy",
        "The Socratic method is still used in law schools and other educational settings"
      ],
      controversies: [
        "Charged with impiety and corrupting the youth of Athens, leading to his execution",
        "Debates over the historical accuracy of Plato's portrayal of Socrates",
        "Questions about the extent to which the 'Socratic problem' can be resolved",
        "His critique of democracy and support for a form of 'philosopher-king' rule"
      ],
      legacy: [
        "Revered as a martyr for free thought and inquiry",
        "His life and death have become emblematic of the tension between philosophical inquiry and established societal norms",
        "The Socratic method continues to be a powerful tool in education and philosophical discourse",
        "His emphasis on ethics and the examined life remains central to many philosophical traditions"
      ],
      year: "-470",
      connections: ["Plato", "Xenophon", "Antisthenes", "Aristippus", "Euclides of Megara"],
      imageUrl: "/images/socrates.jpg",
      timeline: [
        { year: -470, event: "Born in Athens (approximate date)" },
        { year: -432, event: "Serves as a hoplite in the Siege of Potidaea" },
        { year: -424, event: "Participates in the Battle of Delium" },
        { year: -423, event: "Portrayed in Aristophanes' play 'The Clouds'" },
        { year: -406, event: "Serves on the Athenian Senate" },
        { year: -399, event: "Put on trial for impiety and corrupting the youth" },
        { year: -399, event: "Sentenced to death and dies by drinking hemlock" }
      ]
    },
    {
      fullName: "Baruch Spinoza (later Benedict de Spinoza)",
      lifespan: "1632-1677",
      nationality: "Dutch",
      era: "Early modern philosophy",
      concepts: [
        "pantheism",
        "determinism",
        "rationalism",
        "ethics",
        "substance monism",
        "geometrical method",
        "biblical criticism",
        "political philosophy",
        "free will",
        "emotions"
      ],
      framework: "Ethics",
      majorWorks: [
        "Ethics",
        "Theological-Political Treatise",
        "On the Improvement of the Understanding",
        "Short Treatise on God, Man, and His Well-Being"
      ],
      quotes: [
        "I have striven not to laugh at human actions, not to weep at them, nor to hate them, but to understand them.",
        "The highest activity a human being can attain is learning for understanding, because to understand is to be free.",
        "Peace is not an absence of war, it is a virtue, a state of mind, a disposition for benevolence, confidence, justice."
      ],
      personality: "Rational, contemplative, emotionally detached, and intellectually courageous",
      context: "17th-century Dutch philosopher, lens grinder by profession, excommunicated from the Jewish community at age 23",
      style: "Employs logical reasoning and geometric proofs to discuss metaphysical concepts",
      keyIdeas: [
        "God and Nature are one and the same (Deus sive Natura)",
        "Everything that exists is a mode of God's attributes",
        "Human beings are determined by the necessity of divine nature",
        "Knowledge of God leads to intellectual love and blessedness",
        "Emotions can be understood through reason",
        "True freedom comes from understanding necessity"
      ],
      influence: [
        "Laid groundwork for the Enlightenment and modern biblical criticism",
        "Influenced philosophers such as Leibniz, Hegel, and Nietzsche",
        "Contributed to the development of secular thought and liberal democracy"
      ],
      controversies: [
        "Excommunicated from the Jewish community for heretical views",
        "Books placed on the Catholic Church's Index of Forbidden Books",
        "Accused of atheism and pantheism by contemporaries"
      ],
      legacy: [
        "Considered one of the great rationalists of 17th-century philosophy",
        "His ideas on biblical criticism influenced modern textual analysis",
        "His concept of God as nature inspired later philosophers and scientists"
      ],
      year: "1632",
      connections: ["René Descartes", "Gottfried Leibniz", "Georg Wilhelm Friedrich Hegel", "Friedrich Nietzsche"],
      imageUrl: "/images/spinoza.jpg",
      timeline: [
        { year: 1632, event: "Born in Amsterdam" },
        { year: 1656, event: "Excommunicated from the Jewish community" },
        { year: 1661, event: "Moved to Rijnsburg" },
        { year: 1670, event: "Published Theological-Political Treatise anonymously" },
        { year: 1677, event: "Died in The Hague" },
        { year: 1677, event: "Ethics published posthumously" }
      ]
    }
  ];

  const formSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/philosophers`, {
      body: JSON.stringify(philosophers),
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    });
    const result = await res.json();
    log(result.message)
  }

  return (
    <>
      <button type="button" className='btn btn-primary' onClick={(e) => { formSubmit(e) }}>Submit</button>
    </>
  )
}

export default App
