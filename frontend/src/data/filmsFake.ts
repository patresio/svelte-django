import type { Films } from '../models/Film';
import { writable } from 'svelte/store';

const films = writable<Films>([
	{
		id: 1,
		title: 'A Origem',
		image: 'https://upload.wikimedia.org/wikipedia/pt/2/2e/Inception_ver3.jpg',
		director: 'Christopher Nolan',
		sinopse:
			'Um ladrão talentoso, especializado em roubar segredos valiosos do subconsciente das pessoas enquanto sonham, recebe a tarefa mais arriscada de sua vida: em vez de extrair uma ideia, ele deve plantar uma, em uma mente de difícil acesso. O que parecia impossível se transforma em uma jornada de múltiplos níveis de realidade, onde nada é totalmente o que parece.',
		description:
			"Dom Cobb é um mestre da arte de extrair informações confidenciais do subconsciente durante os sonhos. Sua habilidade única fez dele um dos homens mais procurados no mundo da espionagem corporativa, mas também o condenou a viver fugindo, separado de sua família. Quando recebe a chance de ter sua vida de volta, Cobb aceita uma missão que parece inalcançável: realizar uma 'inserção', ou seja, implantar uma ideia na mente de alguém sem que a vítima perceba. Para isso, ele reúne uma equipe de especialistas e embarca em uma aventura que desafia as fronteiras entre sonho e realidade. À medida que descem por camadas cada vez mais profundas do inconsciente, as linhas entre ilusão e verdade se tornam perigosamente tênues, forçando Cobb a confrontar seus próprios fantasmas. ‘A Origem’ é um thriller de ficção científica que combina ação eletrizante com reflexões sobre memória, tempo e identidade.",
		duration: '148 min',
		rating: 8.8
	},
	{
		id: 2,
		title: 'Clube da Luta',
		image:
			'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi19vjPbHR8V7gPw_hYQE6W6MkjxUm0IO7Mxg6HKc4SgI-nkHAtLTy_q38MjCGGnn3Oc-FEsDvwm9EDBnOCLcmPHnFqjgDQaMHhMdhNYYXTS6y-HmrAPn4EzyJG1ebQ8tPM4LHQ2eoR56U/s1000/clube+da+luta.png',
		director: 'David Fincher',
		sinopse:
			'Um homem sem identidade definida, preso em um ciclo de insônia, consumismo e vazio existencial, encontra em um estranho sedutor e imprevisível a faísca para questionar todas as estruturas da sociedade moderna. Juntos, eles criam um clube clandestino de lutas que se torna uma válvula de escape para homens igualmente perdidos. Mas à medida que o clube cresce, o que parecia apenas um ato de rebeldia pessoal se transforma em um movimento anárquico incontrolável, ameaçando os limites da sanidade, da moral e da própria realidade.',
		description:
			'O protagonista, um narrador anônimo, vive uma vida cinzenta e sem propósito, sufocado por um emprego entediante e pela obsessão com bens materiais que não lhe trazem felicidade. Sofrendo de insônia crônica e alienado de si mesmo, ele busca conforto em grupos de apoio de doenças que não tem, apenas para sentir algo real. Sua vida muda drasticamente ao conhecer Tyler Durden, um vendedor de sabonetes carismático, rebelde e cheio de teorias sobre a decadência da civilização. Tyler o convence a confrontar suas frustrações de forma visceral, dando origem ao Clube da Luta, um espaço secreto onde homens comuns se reúnem para extravasar suas dores através da violência física. O que começa como uma terapia alternativa logo se expande para uma rede clandestina, que evolui em direção a um movimento subversivo contra o sistema. Porém, a crescente influência de Tyler e o radicalismo do grupo levam o narrador a questionar sua própria percepção da realidade, até descobrir uma verdade perturbadora sobre si mesmo que muda completamente o rumo da história. ‘Clube da Luta’ é uma obra provocativa, que explora temas como masculinidade tóxica, identidade, alienação social e o perigo de ideologias extremistas.',
		duration: '139 min',
		rating: 8.8
	},
	{
		id: 3,
		title: 'O Senhor dos Anéis: A Sociedade do Anel',
		image:
			'https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABaPCsleGqpks2JZZmtIzrHhLHpKerU5ALJnEVzB-VWvKxHFbQ7-AF2_KbZm-ZAHU127UFgJu7SwFIz29L8xzRn-u7II3e-c1le5U.jpg?r=5ca',
		director: 'Peter Jackson',
		sinopse:
			'Em um mundo de fantasia chamado Terra-média, um jovem hobbit herda um anel aparentemente comum, mas que carrega em si o poder de subjugar todas as raças sob o domínio das trevas. Para impedir que o objeto caia nas mãos do maligno Senhor do Escuro, ele é encarregado de uma jornada épica que o levará muito além de sua vida simples no Condado. Acompanhado por aliados de diferentes povos, Frodo e sua companhia devem enfrentar perigos mortais, traições e a sedução do poder absoluto, numa batalha entre a esperança e a destruição.',
		description:
			'Frodo Bolseiro, um hobbit pacato do Condado, vê sua vida mudar para sempre quando seu tio Bilbo lhe deixa de herança um misterioso anel. Logo, o mago Gandalf revela a terrível verdade: trata-se do Um Anel, forjado por Sauron, o Senhor do Escuro, para controlar todos os demais anéis de poder e dominar a Terra-média. Se o Anel for recuperado pelo inimigo, o mundo será mergulhado em trevas eternas. A única esperança é levá-lo até a Montanha da Perdição, no coração da terra inimiga, onde foi forjado, e destruí-lo no fogo. Para cumprir essa missão quase impossível, forma-se a Sociedade do Anel: Frodo, seus leais amigos hobbits Sam, Merry e Pippin, o mago Gandalf, o arqueiro élfico Legolas, o guerreiro anão Gimli e os homens Aragorn e Boromir. Unidos, eles atravessam montanhas, florestas e rios, enfrentando criaturas sombrias, exércitos brutais e a constante corrupção que o Anel exerce sobre quem o carrega. Ao longo da jornada, laços de amizade e lealdade são testados, e cada um deve lidar com suas próprias fraquezas diante do peso da responsabilidade. ‘A Sociedade do Anel’ é o primeiro capítulo da trilogia épica baseada na obra de J.R.R. Tolkien, trazendo temas de coragem, sacrifício, amizade e a eterna luta entre luz e escuridão em uma das sagas mais grandiosas já contadas no cinema.',
		duration: '178 min',
		rating: 8.8
	},
	{
		id: 4,
		title: 'Matrix',
		image: 'https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg',
		director: 'Lana Wachowski, Lilly Wachowski',
		sinopse:
			'Um jovem hacker começa a questionar sua realidade e descobre que o mundo em que vive não passa de uma simulação criada por máquinas. Guiado por rebeldes que conhecem a verdade, ele precisa escolher entre continuar na ilusão ou despertar para a luta pela liberdade da humanidade.',
		description:
			'Thomas Anderson, conhecido no submundo como Neo, é um hacker talentoso que vive uma vida dupla: de dia, trabalha em um escritório entediante; à noite, mergulha em códigos e sistemas. Tudo muda quando ele entra em contato com Morpheus, um enigmático líder rebelde que lhe revela a verdade: o mundo que Neo conhece é, na realidade, uma simulação chamada Matrix, criada por máquinas inteligentes para manter os humanos subjugados enquanto suas energias são exploradas. Através da escolha simbólica entre a pílula azul e a pílula vermelha, Neo decide acordar para a realidade, onde descobre que pode ser ‘O Escolhido’, o responsável por libertar a humanidade. Com Trinity e os outros membros da resistência, ele precisa enfrentar não apenas agentes implacáveis programados para manter a ordem, mas também seus próprios limites e medos. ‘Matrix’ revolucionou o cinema com sua narrativa filosófica, questionando a natureza da realidade e da liberdade, além de apresentar efeitos visuais inovadores e cenas de ação icônicas.',
		duration: '136 min',
		rating: 8.7
	},
	{
		id: 5,
		title: 'Forrest Gump',
		image: 'https://upload.wikimedia.org/wikipedia/pt/6/67/ForrestGumpPoster.jpg',
		director: 'Robert Zemeckis',
		sinopse:
			'A vida extraordinária de um homem simples, que mesmo com limitações intelectuais, atravessa décadas de história americana com inocência e coragem, tornando-se parte de eventos que mudaram o mundo.',
		description:
			'Forrest Gump é um homem com QI abaixo da média, mas com uma visão de mundo pura e ingênua. Desde pequeno, sofre com dificuldades motoras e preconceito, mas sua determinação e bondade o conduzem a experiências extraordinárias. Ao longo de sua vida, Forrest se envolve, quase sem perceber, em momentos cruciais da história dos Estados Unidos: joga futebol americano universitário, serve no Vietnã, se torna herói de guerra, inspira movimentos culturais e até influencia decisões presidenciais. Apesar de todas as conquistas, sua verdadeira motivação é simples: o amor incondicional por Jenny, sua amiga de infância e paixão eterna. Através de sua jornada, o filme mostra como a inocência, a perseverança e a bondade podem transformar o mundo ao redor. ‘Forrest Gump’ é uma celebração da vida, da simplicidade e da capacidade humana de superar obstáculos com coração e esperança.',
		duration: '142 min',
		rating: 8.8
	},
	{
		id: 6,
		title: 'Os Suspeitos',
		image: 'https://upload.wikimedia.org/wikipedia/pt/9/9c/The_Usual_Suspects.jpg',
		director: 'Bryan Singer',
		sinopse:
			'Após um crime misterioso, cinco criminosos são reunidos em uma investigação que os leva a uma conspiração cada vez mais complexa, envolvendo um personagem lendário e temido do submundo: Keyser Söze.',
		description:
			"A história começa com uma explosão em um navio e poucos sobreviventes. Um dos sobreviventes, Roger 'Verbal' Kint, um golpista manco e aparentemente inofensivo, começa a narrar aos investigadores a sequência de eventos que levaram ao desastre. Ele descreve como cinco criminosos se conheceram em uma linha de reconhecimento policial e passaram a trabalhar juntos em golpes ousados. À medida que a narrativa avança, surgem indícios de que eles foram manipulados por uma figura quase mítica do crime organizado: Keyser Söze, um homem tão temido que muitos duvidam de sua existência. O filme conduz o espectador em uma trama de mistério, traições e reviravoltas, culminando em um dos finais mais surpreendentes e memoráveis do cinema. ‘Os Suspeitos’ é um thriller de crime inteligente que mantém o público em suspense até o último segundo.",
		duration: '106 min',
		rating: 8.5
	},
	{
		id: 7,
		title: 'O Silêncio dos Inocentes',
		image: 'https://upload.wikimedia.org/wikipedia/pt/7/76/The_Silence_of_the_Lambs.jpg',
		director: 'Jonathan Demme',
		sinopse:
			"Uma jovem agente do FBI busca capturar um serial killer conhecido como 'Buffalo Bill' e, para isso, precisa confrontar um assassino canibal brilhante e manipulador: o Dr. Hannibal Lecter.",
		description:
			'Clarice Starling, uma aluna promissora da academia do FBI, é designada para entrevistar o Dr. Hannibal Lecter, um ex-psiquiatra brilhante, mas também um assassino canibal encarcerado. O objetivo é extrair dele informações que possam ajudar a capturar Buffalo Bill, um serial killer que sequestra e mata mulheres. Ao longo das conversas, Lecter demonstra sua mente afiada e manipuladora, enquanto explora as vulnerabilidades e inseguranças de Clarice. Apesar do perigo psicológico que representa, Lecter fornece pistas enigmáticas que podem ser cruciais para a investigação. Em uma corrida contra o tempo, Clarice precisa decifrar as mensagens do doutor e enfrentar seus próprios medos para impedir que mais vidas sejam tiradas. ‘O Silêncio dos Inocentes’ é um thriller psicológico intenso que combina investigação criminal com um fascinante jogo de mentes entre presa e predador.',
		duration: '118 min',
		rating: 8.6
	},
	{
		id: 8,
		title: 'Gladiador',
		image: 'https://upload.wikimedia.org/wikipedia/pt/8/8d/GladiadorPoster.jpg',
		director: 'Ridley Scott',
		sinopse:
			'Um poderoso general romano é traído e perde tudo o que ama. Escravizado e forçado a lutar como gladiador, ele busca vingança contra o imperador corrupto que destruiu sua vida.',
		description:
			'Maximus Decimus Meridius é um respeitado general do exército romano, fiel ao imperador Marcus Aurelius. Porém, quando o imperador é assassinado por seu filho, Commodus, Maximus é traído, sua família é brutalmente morta e ele é reduzido à escravidão. No desespero, encontra nas arenas de gladiadores uma nova forma de sobrevivência. A cada batalha sangrenta, ele conquista fama e respeito, aguardando o momento certo para se vingar. Sua trajetória o leva de volta a Roma, onde, diante da multidão e do próprio imperador, ele terá a chance de restaurar sua honra e fazer justiça. ‘Gladiador’ é uma epopeia sobre honra, vingança e a luta pela liberdade, marcada por cenas grandiosas, batalhas épicas e uma emocionante jornada de redenção.',
		duration: '155 min',
		rating: 8.5
	},
	{
		id: 9,
		title: 'Cidade de Deus',
		image: 'https://upload.wikimedia.org/wikipedia/pt/1/10/CidadedeDeus2002.jpg',
		director: 'Fernando Meirelles, Kátia Lund',
		sinopse:
			'A ascensão e queda do crime organizado em uma favela do Rio de Janeiro, vista pelos olhos de jovens que crescem em meio à pobreza, à violência e às escolhas difíceis que moldam seus destinos.',
		description:
			'Baseado em fatos reais, ‘Cidade de Deus’ retrata a transformação de uma comunidade do Rio de Janeiro entre os anos 1960 e 1980. A história é narrada por Buscapé, um jovem que sonha em se tornar fotógrafo para escapar da violência que o cerca. Enquanto ele busca um caminho diferente, outros meninos seguem rumo ao crime, como Dadinho, que se torna o temido Zé Pequeno, um dos mais violentos traficantes da região. O filme acompanha a ascensão e o domínio do tráfico de drogas, a guerra entre facções e a brutalidade da vida na favela. Ao mesmo tempo, revela as consequências das escolhas individuais em um ambiente onde a sobrevivência parece ser o único objetivo. ‘Cidade de Deus’ é um retrato cru, realista e impactante da desigualdade social e da espiral de violência que molda gerações inteiras.',
		duration: '130 min',
		rating: 8.6
	},
	{
		id: 10,
		title: 'O Pianista',
		image: 'https://upload.wikimedia.org/wikipedia/pt/6/66/The_Pianist_movie.jpg',
		director: 'Roman Polanski',
		sinopse:
			'A jornada real e comovente de um pianista judeu polonês que luta para sobreviver durante a ocupação nazista na Segunda Guerra Mundial, enfrentando fome, perseguição e o horror da guerra.',
		description:
			'Baseado na autobiografia do pianista Władysław Szpilman, o filme retrata a luta pela sobrevivência de um artista judeu em meio à ocupação nazista na Polônia. Szpilman, um músico talentoso, vê sua vida ser destruída com a invasão alemã e a criação do gueto de Varsóvia. Separado de sua família e privado de sua liberdade, ele precisa enfrentar fome, medo e isolamento absoluto, escondendo-se em ruínas enquanto testemunha atrocidades indescritíveis. Sua única força para resistir vem da música e da esperança de um futuro onde possa tocar novamente. A história alcança um momento inesperado quando ele encontra compaixão em um oficial alemão, que reconhece seu talento e o ajuda a sobreviver. ‘O Pianista’ é uma obra poderosa sobre a resistência do espírito humano, a devastação da guerra e a importância da arte como forma de sobrevivência e esperança.',
		duration: '150 min',
		rating: 8.5
	}
]);

export default films;
