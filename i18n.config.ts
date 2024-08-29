const options = {
  legacy: false,
  locale: "en",
  messages: {
    cs: {
      index: {
        title: "Tohle je Iris",
        subheading: "Pohled do nové éry grafiky Minecraftu",
        or: "nebo",
        continue: "Pokračovat ve čtení",
        heading1: "Proč Iris?",
        subheading1: "Tohle dělá Iris výjmečným",
        card1: "Kompatibilita s módy",
        carddesc1:
          "Iris má zajištění kompatibility s módy jako hlavní prioritu a je již kompatibilní se spoustou vašich oblíbených módů!",
        card2: "Moderní design",
        carddesc2:
          "Iris byl od základu vytvořen tak, aby byl rozšiřitelný a snadno aktualizovatelný. Rozlučte se s týdny čekání na použití shaderů v nové verzi Minecraftu!",
        card3: "Zdarma a Open Source",
        carddesc3:
          "Iris je open source mód, do kterého může kdokoli přispívat. To umožňuje zlepšování Irisu díky usnadnění spolupráce.",
        heading2: "Funkce",
        subheading2: "Co může Iris nabídnout",
        image1: "Stejné jako OptiFine",
        imagedesc1:
          "Iris se snaží mít plnou podporu pro všechny minulé i současné balíčky shaderů OptiFine a počet balíčků podporovaných Irisem neustále rychle roste!<span class='text-span-2'><br>Vyfotil IMS</span>",
        image2: "Funguje se Sodium",
        imagedesc2:
          "Iris je kompatibilní s optimalizačními módy CaffeineMC jako je Sodium a Phosphor, což umožňuje úžasnou grafiku se stejnou nebo dokonce vyšší snímkovou frekvencí než ve vanille.<br><span class='text-span-2'>Vyfotil IMS</span>",
        heading3: "Výhoda Iris",
        subheading3:
          "Nové způsoby vykreslování, díky kterým budete vždy o krok dále před hrou",
        shadows: "Stíny",
        entities: "Entinty",
        screenshottitle1: "Optimalizované stíny",
        screenshotdesc1:
          "Iris používá techniku s názvem Shadow Frustum Culling pro snížení dopadu největšího žrouta výkonu shaderu - stínů. Pomocí této funkce budete moci dosáhnout vyšších snímkových frekvencí bez snížení kvality volumetrického světla nebo stínů.<br><span class='text-span-2'>Vyfotil IMS, Kappa v5</span>",
        screenshottitle2: "Efektivní renderování entit",
        screenshotdesc2:
          "Iris zlepšuje způsob, jakým Minecraft renderuje entity a blokové entity jako truhly, prasata a rámečky. Tento trik funguje i se zakázanými shadery a ve světech s velkým počtem entit, může zvýšit vanilla výkon až o 60 procent. Velkého zlepšení se dočkalo hlavně vykreslování stínů, díky čemuž jsou oblasti, které byly dříve se shadery nehratelné, nyní plynulé!<br><span class='text-span-2'>Vyfotil kinzuu_music</span>",
        stillcurious:
          "Stále jste zvědaví? <a href='about.html'>Zjistěte více</a><link rel='prefetch' href='/about.html'>.",
      },
      about: {
        abouttitle: "O projektu IrisShaders",
        heading: "Projekt Iris",
        subheading: "Zjistěte více o shaderové senzaci",
        aboutproject: "O projektu",
        messageheading:
          "Zpráva od zakladatele a hlavního vývojáře Iris Shaders",
        message:
          "Iris byl vytvořen pro zaplnění díry, kterou jsem viděl v komunitě přizpůsobení a grafického zlepšení Minecraftu: chybějící open-source mód na shadery, který by mi umožnil načíst mé oblíbené balíčky shaderů na moderních verzích hry, se zachováním výkonu a kompatibility s modpacky. OptiFine, současný dominantní mód pro načítání balíčků shaderů, má restriktivní licenci, která stojí v cestě jakémukoli způsobu úpravy, a je nechvalně známý díky problémům s kompatibilitou s módy, které mám rád. Také je nekompatibilní se Sodiem, s velkým náskokem nejlepším módem na optimalizaci vykreslování hry. ShadersMod nikdy nebyl aktualizován na verzi vyšší než 1.12 a chybí mu podpora pro velkou spoustu moderních a populárních shaderů. Takže jsem vytvořil Iris, abych se pokusil vyřešit tyto problémy a také dlouhotrvající potíže s balíčky shaderů.<br><br>Iris vyvíjím hlavně abych naplnil své vlastní potřeby shader módu orientovaného na výkon s dobrou kompatibilitou a potenciálním prostorem pro úpravy. Iris při spárování se Sodiem nabízí dobrý výkon na mém počítači, díky čemuž mohu konečně plně hrát se shadery namísto jejich neustálého zapínání, abych zachytil pěkné screenshoty, a poté jejich vypínání, jakmile mě unaví neustálé pády FPS. Smozřejmě, jak můžete vidět, nejsem ani zdaleka jediný, kdo využívá vývoje Irisu, což je důvod, proč jsem se rozhodl jej zveřejnit pro všechny jako open-source mód.<br><br>Iris má veřejné stabilní vydání pro 1.16 i 1.17, které funguje s vlastní verzí Sodia, a veřejné beta vydání pro 1.18 snapshoty. Iris je stále ve vývoji a velmi často dostává velké aktualizace, díky čemuž velmi rychle postupuje kupředu!",
        performance: "Výkon",
        performanceheading: "Podívejte se, jak Iris zlepšuje výkon",
        vanilla: "Pouze vanilla",
        vanillamessage:
          "Vanilla Minecraft má velmi starý základ kódu a spousta lidí tvrdí, že potřebuje přepsání, hlavně co se týče grafiky. Rychlé 3D vykreslování, přidané v 1.15, byl pokus tento problém nějakým způsobem vyřešit, ale ve spoustě případů to jen zhoršilo daný problém. V 1.17 se Minecraft přesouvá na OpenGL Core 3.2 a Javu 16, ale zatím nebyly implementovány žádné znatelné změny, které by využily výkonostní zlepšení těchto systémů. Minecraft před 1.17 také nativně nepodporoval shadery a i po vydání 1.17 je jejich podpora stále velmi omezená. Minecraft je nicméně znám pro svou nenáročnou minimalistickou grafiku a poskytuje dobrý základ pro vysokovýkonnostní grafiku založenou na shaderech.",
        sodium: "Vanilla + <span class='text-span-4'>Sodium</span>",
        sodiummessage:
          "Sodium je Fabric mód, který přepisuje části vanilla vykreslovacího systému pro optimalizaci výkonu způsobem, kterým to žádný mód před ním neudělal. Sodium je aktivně udržováno a aktualizováno a cílí na kompatibilitu s dalšími Fabric módy pro maximální FPS i s největšími modpacky. Jeho bratrské módy Lithium, Phosphor a Hydrogen, mohou být všechny použity společně se Sodiem pro optimalizaci každé stránky hry, ať už jde o tickování, světlo nebo paměť. Tyto módy mohou společně zlepšit počty FPS na 150% a více pro každého hráče, ať už cílí na maximální snímkovou frekvenci pro nejlepší PvP, nebo je Sodium a další zmíněné módy jediný způsob, jak mít hru hratelnou i na hardwaru, který má po ruce.",
        sodiumiris:
          "Vanilla + <span class='text-span-4'>Sodium</span> + <span class='text-span-5'>Iris</span>",
        sodiumirismessage:
          "Iris je postaveno na Sodiu i vanille poskytnutím něčeho, co před ním žádný samostatný Fabric mód nedokázal: podpora pro již existující vlastní shadery. A protože je Iris postaveno na Sodiu a vanille, můžete získat shadery s dobrou snímkovou frekvencí bez potřeby drahého hardwaru nebo experimentálních herních modifikací. Procesy navíc, které Iris provádí, snižují výkon pouze o 10-15 procent a s nainstalovaným Sodiem zůstává výkon vysoko nad normálním vanilla výkonem. V budoucnu bude Iris plně integrován a streamlinován a bude mít vlastní vykreslovací optimalizace, což umožní, aby bylo Sodium a Iris společně lepší než jakýkoli z nich sám. Tato výkonnostní vylepšení se přesouvají přímo na shadery, s nejpopulárnějšími shadery běžícími vždy nad 60 FPS, i na 5 či 6 let starém hardwaru!",
        screenshot: "Galerie snímků",
        screenshotsubheading: "Podívejte se, co může Iris nabídnout",
        screenshot1: "Vyfotil Guardian pomocí SEUS v11",
        screenshot2: "Vyfotil Guardian pomocí Sildurs Extreme VL",
        screenshot3: "Vyfotil FoundationGames pomocí Complementary",
        screenshot4: "Vyfotil IMS pomocí Sildurs Vibrant Extreme VL",
        screenshot5: "Vyfotil IMS pomocí BSL v8",
        screenshot6: "Vyfotil IMS pomocí Complementary v4.0",
        screenshot7: "Vyfotil IMS pomocí Complementary v4.0",
        screenshot8: "Vyfotil IMS pomocí SEUS Renewed",
        screenshot9: "Vyfotil IMS pomocí Complementary v4.0",
        screenshot10: "Vyfotil IMS pomocí Complementary v4.0",
        screenshot11: "Vyfotil kinzuu_music pomocí Complementary v4.0",
        screenshot12: "Vyfotil Justsnoopy30 pomocí Complementary v4.0 BE",
        note: "Poznámka - BE značí snímky, které byly pořízeny s módem BetterEnd od paulevs",
      },
      download: {
        downloadiris: "Stáhnout nyní - IrisShaders",
        heading: "Instalátor Iris",
        subheading: "Navržen tak, aby vám zpříjemnil používání Iris",
        description:
          "Instalátor Iris automaticky stáhne a nainstaluje Iris a Sodium pro dobrou grafiku s plynulými snímky za vteřinu. Jednoduše spusťte instalátor, vyberte si verzi a klikněte na nainstalovat. Nevěříte? Zkuste si to sami.",
        downloadjar: "Stáhnout univerzální JAR",
        alternatedownloads: "Alternativní stažení",
        alternatedownloadsubheading:
          "Nelíbí se vám náš praktický instalátor? Zkuste samostatnou verzi",
        getmodrinth: "Stáhnout z Modrinth",
        getcurseforge: "Stáhnout z CurseForge",
        getgithub: "Zdrojový kód na GitHubu",
      },
      common: {
        irisshaders: "Iris Shaders",
        home: "Domů",
        about: "Více informací",
        download: "Stáhnout",
        dark: " Tmavý režim",
        light: " Světlý režim",
        footer1: "O projektu Iris",
        footerdesc1:
          "Projekt Iris je kolaborativní open-source projekt vytvořený týmem vášnivých vývojářů, kteří chtějí udělat zážitek s Minecraft shadery nejlepší, jaký může být. Iris je vyvíjen komunitou pro komunitu.",
        footer2: "Užitečné odkazy",
        curseforge: "Iris na CurseForge",
        modrinth: "Iris na Modrinth",
        github: "GitHub",
        discord: "Discord",
        patreon: "Patreon",
        copyright: "© Copyright 2024 IrisShaders. Všechna práva vyhrazena.",
      },
    },
    de: {
      index: {
        title: "Das ist Iris",
        subheading: "Ein Blick in eine neue Ära der Minecraft-Grafik",
        or: "oder",
        continue: "Weiterlesen",
        heading1: "Warum Iris?",
        subheading1: "Das macht Iris so besonders",
        card1: "Ausgezeichnete Mod-Kompatibilität",
        carddesc1:
          "Iris legt großen Wert auf Mod-Kompatibilität und ist bereits mit vielen deiner Lieblingsmods kompatibel!",
        card2: "Modernes Design",
        carddesc2:
          "Iris wurde von vornherein für einfache Updates ausgelegt. Schluss mit der wochenlangen Wartezeit, um Shader in der neuen Minecraft-Version zu verwenden!",
        card3: "Frei und Open-Source",
        carddesc3:
          "Iris ist eine Open-Source-Mod, zu der jede/-r beitragen kann. Dies ermöglicht Iris sich durch Zusammenarbeit zu verbessern.",
        heading2: "Merkmale",
        subheading2: "Das hat Iris zu bieten",
        image1: "OptiFine-Übereinstimmung",
        imagedesc1:
          "Iris hat sich zum Ziel gesetzt, alle älteren und aktuellen OptiFine-Shaderpakete zu unterstützen, und die Anzahl der von Iris unterstützten Pakete wächst ständig und schnell!<span class='text-span-2'><br>Screenshot von IMS</span>",
        image2: "Funktioniert mit Sodium",
        imagedesc2:
          "Iris ist mit den Optimierungsmods von CaffeineMC wie Sodium, Lithium und Phosphor kompatibel und ermöglicht so beeindruckende Grafiken mit vergleichbarer oder sogar besserer Performance als Vanilla-Minecraft.<br><span class='text-span-2'>Screenshot von IMS</span>",
        heading3: "Der Vorteil von Iris",
        subheading3:
          "Neue Rendertechniken, mit denen du einen Schritt voraus bist",
        shadows: "Schatten",
        entities: "Entities",
        screenshottitle1: "Performance-Optimierte Schatten",
        screenshotdesc1: `Iris verwendet ein Verfahren namens "Shadow Frustum Culling", um den Overhead von Schatten, einem der größten Leistungsfresser bei Shadern, zu verringern. Mit dem Shadow Frustum Culling von Iris erreichst du höhere FPS, ohne die Qualität von volumetrischer Beleuchtung oder Schatten zu beeinträchtigen.<br><span class='text-span-2'>Screenshot von IMS, Kappa v5</span>`,
        screenshottitle2: "Effizientes Entity-Rendering",
        screenshotdesc2:
          "Iris verbessert die Art und Weise, wie Minecraft Entities und Block-Entities wie Truhen, Schweine und Item-Frames darstellt. Dieser Trick funktioniert sogar ohne Shader und kann in Welten mit vielen Entities die Performance von Vanilla Minecraft um bis zu 60 Prozent steigern. Die Darstellung von Schatten erfährt eine besonders große Verbesserung und macht Bereiche, die früher mit Shader unspielbar waren, zu Orten, an denen deine FPS erstaunlich flüssig sind!<br><span class='text-span-2'>Screenshot von kinzuu_music</span>",
        stillcurious:
          "Neugierig geworden? <a href='about.html'>Mehr erfahren</a><link rel='prefetch' href='/about.html'>.",
      },
      about: {
        abouttitle: "Über IrisShaders",
        heading: "Das Iris-Projekt",
        subheading: "Erfahre mehr über die Shader-Sensation",
        aboutproject: "Über das Projekt",
        messageheading:
          "Eine Nachricht vom Gründer und leitenden Entwickler von IrisShaders",
        message:
          "Iris wurde entwickelt, um eine Lücke zu füllen, die ich in der Minecraft-Community für Anpassungen und grafische Verbesserungen sah: das Fehlen einer Open-Source-Mod für Shader, mit der ich meine liebsten Shaderpakete in modernen Versionen des Spiels laden kann, während die Performance und Kompatibilität mit Modpacks erhalten bleibt. OptiFine, die derzeitig führende Mod zum Laden von Shaderpaketen, hat eine restriktive Lizenz, die jeder Art von Modifikation im Wege steht, und ist ziemlich berüchtigt für Kompatibilitätsprobleme mit einigen meiner Lieblingsmods. Außerdem ist OptiFine nicht mit Sodium kompatibel, der mit Abstand besten Mod zur Rendering-Optimierung, die es gibt. ShadersMod wurde seit Version 1.12 nicht mehr aktualisiert und bietet zudem keine Unterstützung für viele der heutzutage beliebten Shaderpakete. Deshalb habe ich Iris entwickelt, um diese sowie viele andere seit langem bestehende Probleme mit Shaderpaketen zu beheben.<br><br>Ich habe Iris in erster Linie entwickelt, um meinem eigenen Wunsch nach einer leistungsorientierten Shader-Mod mit hervorragender Kompatibilität und Möglichkeiten zur Modifikation nachzukommen. In Verbindung mit Sodium läuft Iris auf meinem Rechner großartig und macht es mir endlich möglich, mit Shadern wirklich zu spielen, anstatt sie nur ab und zu einzuschalten, um ein paar hübsche Screenshots zu machen, und sie danach wieder auszuschalten, wenn ich die Frame-Drops nicht mehr ertragen kann. Wie sich herausstellte, bin ich natürlich bei weitem nicht die einzige Person, die von der Entwicklung von Iris profitiert, daher habe ich beschlossen, Iris als Open-Source-Mod der Öffentlichkeit zugänglich zu machen.<br><br>Iris hat inzwischen eine öffentliche stabile Version für 1.16, 1.17 und 1.18 sowie eine öffentliche Betaversion für Snapshots. Iris befindet sich immer noch in ständiger Entwicklung und erhält sehr oft neue Verbesserungen, und macht sehr schnell Fortschritte!",
        performance: "Performance",
        performanceheading:
          "Schau dir an, wie sich die Frames mit Iris stapeln",
        vanilla: "Nur Vanilla",
        vanillamessage:
          "Die aktuelle Minecraft-Version hat eine sehr alte Codebasis, und viele sagen, dass sie dringend überarbeitet werden muss, vor allem, wenn es um die Grafik geht. Die Einführung von Blaze-3D-Rendering in Version 1.15 sollte die Situation verbessern, hat sie aber in vielerlei Hinsicht nur noch schlimmer gemacht. Mit der Version 1.17 setzt Minecraft auf OpenGL Core 3.2 und Java 16, doch bisher wurden keine größeren Änderungen vorgenommen, um die Leistungsverbesserungen dieser Systeme zu nutzen. Minecraft unterstützte vor 1.17 auch nativ keine Shader, und selbst jetzt, nach der Veröffentlichung von 1.17, ist die Shader-Unterstützung noch immer sehr begrenzt. Allerdings ist Minecraft für seine minimalistische Grafik mit geringem Overhead bekannt und bietet eine solide Grundlage für leistungsstarke Shader-basierte Grafiken.",
        sodium: "Vanilla + <span class='text-span-4'>Sodium</span>",
        sodiummessage:
          "Sodium ist eine Fabric/Quilt-Mod, die Teile des Vanilla-Rendering-Systems überarbeitet, um die Performance so zu optimieren, wie es keine andere Mod zuvor getan hat. Sodium wird aktiv gepflegt und aktualisiert und zielt darauf ab, mit den meisten anderen Fabric/Quilt-Mods kompatibel zu sein, um auch in den größten Modpacks maximale Performance zu erreichen. Die Geschwister-Mods Lithium, Phosphor und Hydrogen können alle zusammen mit Sodium verwendet werden, um jeweils einen anderen Teil des Spiels zu optimieren, sei es das Ticken, die Beleuchtung oder der Arbeitsspeicher. Gemeinsam können diese Mods die FPS für jeden Spieler/jede Spielerin auf 150% oder mehr der Vanilla-Performance steigern, ganz egal, ob auf maximale Performance abgezielt wird, um einen Vorteil im PvP zu erlangen, oder ob Sodium und Co. die einzigen Mods sind, die das Spiel auf der vorhandenen Hardware spielbar machen.",
        sodiumiris:
          "Vanilla + <span class='text-span-4'>Sodium</span> + <span class='text-span-5'>Iris</span>",
        sodiumirismessage:
          "Iris erweitert sowohl Sodium als auch Vanilla, indem es bereits bestehende benutzerdefinierte Shader unterstützt - etwas, das noch keine eigenständige Fabric/Quilt-Mod bisher ermöglicht hat. Und da Iris mit Sodium und Vanilla zusammenarbeitet, können Shader mit erstaunlicher Performance verwendet werden, ohne dass teure Hardware oder experimentelle Mods benötigt werden. Die zusätzlichen Berechnungen, die Iris durchführt, reduzieren die Performance um nur 10-15 Prozent, und wenn Sodium installiert ist, bleibt die Performance weit über der von Vanilla! Dies überträgt sich direkt auf Shader, wobei die meisten gängigen Shader durchgängig mit 60 FPS oder mehr laufen, sogar auf 5 oder 6 Jahre alter Hardware!",
        screenshot: "Screenshot-Galerie",
        screenshotsubheading: "Schau dir an, was Iris zu bieten hat",
        screenshot1: "Aufgenommen von Guardian mit SEUS v11",
        screenshot2: "Aufgenommen von Guardian mit Sildurs Extreme VL",
        screenshot3: "Aufgenommen von FoundationGames mit Complementary",
        screenshot4: "Aufgenommen von IMS mit Sildurs Vibrant Extreme VL",
        screenshot5: "Aufgenommen von IMS mit BSL v8",
        screenshot6: "Aufgenommen von IMS mit Complementary v4.0",
        screenshot7: "Aufgenommen von IMS mit Complementary v4.0",
        screenshot8: "Aufgenommen von IMS mit SEUS Renewed",
        screenshot9: "Aufgenommen von IMS mit Complementary v4.0",
        screenshot10: "Aufgenommen von IMS mit Complementary v4.0",
        screenshot11: "Aufgenommen von kinzuu_music mit Complementary v4.0",
        screenshot12: "Aufgenommen von Justsnoopy30 mit Complementary v4.0 BE",
        note: "Hinweis - BE kennzeichnet Screenshots, die Inhalte aus der BetterEnd-Mod von paulevs enthalten.",
      },
      download: {
        downloadiris: "Jetzt herunterladen - IrisShaders",
        heading: "Der Iris-Installer",
        subheading: "entwickelt, um das Iris-Erlebnis zu erleichtern",
        description:
          'Der Iris-Installer lädt Iris und Sodium automatisch herunter und installiert sie, um großartige Grafiken mit flüssigen FPS zu ermöglichen. Führe einfach den Installer aus, wähle deine Version und klicke auf "Installieren". Du glaubst uns nicht? Probiere es selbst aus!',
        downloadjar: "Universelle JAR herunterladen",
        alternatedownloads: "Alternative Downloads",
        alternatedownloadsubheading:
          "Unser handlicher Installer ist nicht dein Stil? Probiere die Standalone-Version",
        getmodrinth: "Auf Modrinth herunterladen",
        getcurseforge: "Auf CurseForge herunterladen",
        getgithub: "Quellcode auf GitHub erhalten",
      },
      common: {
        irisshaders: "Iris Shaders",
        home: "Startseite",
        about: "Mehr erfahren",
        download: "Jetzt herunterladen",
        dark: " Dunkles Design",
        light: " Helles Design",
        footer1: "Über das Iris-Projekt",
        footerdesc1:
          "Das Iris-Projekt ist ein gemeinschaftliches Open-Source-Projekt, das von einem Team leidenschaftlicher Entwickler/-innen ins Leben gerufen wurde, um für Minecraft das bestmögliche Shader-Erlebnis zu schaffen. Iris wird von der Community, für die Community entwickelt.",
        footer2: "Nützliche Links",
        curseforge: "Iris auf CurseForge",
        modrinth: "Iris auf Modrinth",
        github: "GitHub",
        discord: "Discord",
        patreon: "Patreon",
        copyright: "© Copyright 2024 IrisShaders. Alle Rechte vorbehalten.",
      },
    },
    en: {
      index: {
        title: "This is Iris",
        subheading: "A lens into a new era of minecraft graphics",
        or: "or",
        continue: "Continue Reading",
        heading1: "Why Iris?",
        subheading1: "This is what makes Iris different",
        card1: "Great mod Compatibility",
        carddesc1:
          "Iris is committed to ensuring mod compatibility as a first priority, and is already compatible with many of your favorite mods!",
        card2: "Modern Design",
        carddesc2:
          "Iris has been built from the ground up to be extensible and easy to update. Say goodbye to weeks of waiting to use shaders on the new Minecraft version!",
        card3: "Free and Open Source",
        carddesc3:
          "Iris is an open source mod that anyone can contribute to. This allows Iris to improve by facilitating collaboration.",
        heading2: "Features",
        subheading2: "What Iris has to offer",
        image1: "OptiFine Parity",
        imagedesc1:
          "Iris aims to have full support for all past and present OptiFine shader packs, and number of packs supported by Iris is constantly and rapidly growing!<span class='text-span-2'><br>Screenshot by IMS, Kappa v5</span>",
        image2: "Works with Sodium",
        imagedesc2:
          "Iris is compatible with CaffeineMC optimization mods such as Sodium and Phosphor, enabling stunning graphics at frames comparable to or even better than vanilla.<br><span class='text-span-2'>Screenshot by IMS, Nostalgia v4</span>",
        heading3: "The Iris Advantage",
        subheading3: "New rendering techniques that put you ahead of the game",
        shadows: "Shadows",
        entities: "Entities",
        screenshottitle1: "Performance-Optimized Shadows",
        screenshotdesc1:
          "Iris uses a technique called Shadow Frustum Culling to decrease the overhead of one of the biggest performance hogs of a shader - the shadows. Using Iris&#x27;s shadow frustum culling, you&#x27;ll be able to reach higher frame rates without sacrificing the quality of volumetric lighting or shadows.<br><span class='text-span-2'>Screenshot by IMS, Kappa v5</span>",
        screenshottitle2: "Efficient Entity Rendering",
        screenshotdesc2:
          "Iris improves the way that Minecraft renders entities and block entities like chests, pigs, and item frames. This trick even works with shaders disabled, and in worlds with a lot of entities, it can boost vanilla performance by up to 60 percent. Shadow rendering sees an especially large improvement, making areas that were once unplayable with shaders into places where your FPS is surprisingly smooth!<br><span class='text-span-2'>Screenshot by kinzuu_music</span>",
        stillcurious:
          "Still curious? <a href='about.html'>Learn More</a><link rel='prefetch' href='/about.html'>.",
      },
      about: {
        abouttitle: "About IrisShaders",
        heading: "The Iris Project",
        subheading: "Learn more about the Shader Sensation",
        aboutproject: "About the Project",
        messageheading:
          "A message from the founder and lead developer at Iris Shaders",
        message:
          "Iris was created to fill a void that I saw in the Minecraft customization and graphical enhancement community: the lack of an open-source shaders mod that would let me load my favorite shader packs on modern versions of the game, while retaining performance and compatibility with modpacks. OptiFine, the current dominant mod for loading shader packs, has restrictive licensing that firmly stands in the way of any sort of tinkering, and is fairly notorious for having compatibility issues with the mods that I like. It&#x27;s also mutually incompatible with Sodium, the best rendering optimization mod in existence by a large margin. ShadersMod was never updated past 1.12, and it lacks support for many of the many modern popular shaderpacks. So I created Iris, to try and solve these issues, and also address many other longstanding issues with shader packs.<br><br>I first and foremost develop Iris to meet my own needs of a performance-oriented shaders mod with good compatibility and potential for tinkering. Iris when paired with Sodium delivers great performance on my machine, finally making it fully possible for me to actually play with shaders instead of just periodically switching them on to take pretty screenshots, then switching them off once I get tired of frame drops. Of course, as it turns out, I&#x27;m far from the only person who benefits from the development of Iris, which is why I&#x27;ve decided to release it to the public as an open-source mod.<br><br>Iris has a public stable release for 1.18.2, 1.19.2, and 1.19.3, as well as a public beta for snapshots. Iris is still in heavy development and gets new improvements very often, and is progressing very rapidly!",
        performance: "Performance",
        performanceheading: "See how the frames stack up with Iris",
        vanilla: "Vanilla Only",
        vanillamessage:
          "The current version of Minecraft has a very old codebase, and many say that it is in sore need of a rewrite, especially when it comes to graphics. Blaze 3D rendering, added in 1.15, was an attempt to alleviate this somewhat, but in many ways only worsened the problem. In 1.17, Minecraft is moving to OpenGL Core 3.2 and Java 16, but so far no significant changes have been implemented that utilize the performance enhancements of these systems. Minecraft before 1.17 also did not natively support shaders, and even since 1.17 released, shader support is very limited. However, Minecraft is known for it&#x27;s low-overhead minimalistic graphics, and provides a strong foundation for high-performance shader-based graphics.",
        sodium: "Vanilla + <span class='text-span-4'>Sodium</span>",
        sodiummessage:
          "Sodium is a fabric mod that rewrites parts of the vanilla rendering system to optimize for performance in a way that no other mod has done before. Sodium is actively maintained and updated, and aims to be compatible with most other Fabric mods for maximum FPS even in the biggest modpacks. Its sibling mods, Lithium, Phosphor, and Hydrogen, can all be used in conjunction with sodium to each optimize a different aspect of the game, whether it be ticking, lighting, or memory respectively. These mods together can boost FPS to 150% or more of vanilla performance for any player out there, whether you&#x27;re aiming for maximum frames to give you that PvP edge, or whether Sodium and the like are the only mods that can make the game playable on the hardware you have at hand.",
        sodiumiris:
          "Vanilla + <span class='text-span-4'>Sodium</span> + <span class='text-span-5'>Iris</span>",
        sodiumirismessage:
          "Iris builds on both Sodium and Vanilla by providing something that no standalone fabric mod has had before: support for existing custom shaders. And because Iris stacks with Sodium and Vanilla, you can get shaders at remarkable frame rates, without the need for expensive hardware or experimental game modifications. The extra processes that Iris performs only reduce performance by 10-15 percent, and with sodium installed the performance stays well above vanilla performance! This transfers directly to shaders, with most popular shaders consistently running at or above 60 fps, even on 5 and 6 year old hardware!",
        screenshot: "Screenshot Gallery",
        screenshotsubheading: "See what iris has to offer",
        screenshot1: "Captured by Guardian using SEUS v11",
        screenshot2: "Captured by Guardian using Sildurs Extreme VL",
        screenshot3: "Captured by FoundationGames using Complementary",
        screenshot4: "Captured by IMS using Sildurs Vibrant Extreme VL",
        screenshot5: "Captured by IMS using BSL v8",
        screenshot6: "Captured by IMS using Complementary v4.0",
        screenshot7: "Captured by IMS using Complementary v4.0",
        screenshot8: "Captured by IMS using SEUS Renewed",
        screenshot9: "Captured by IMS using Complementary v4.0",
        screenshot10: "Captured by IMS using Complementary v4.0",
        screenshot11: "Captured by kinzuu_music using Complementary v4.0",
        screenshot12: "Captured by Justsnoopy30 using Complementary v4.0 BE",
        note: "Note - BE indicates screenshots that feature content from the BetterEnd mod by paulevs.",
      },
      download: {
        downloadiris: "Download Now - IrisShaders",
        heading: "The Iris Installer",
        subheading: "designed to streamline your Iris experience",
        description:
          "Iris&#x27;s installer will automatically download and install Iris and Sodium for great graphics at smooth framerates. Simply run the installer, choose your version, and hit install. Don&#x27;t believe us? Try it for yourself!",
        downloadjar: "Download Universal JAR",
        alternatedownloads: "Alternate Downloads",
        alternatedownloadsubheading:
          "Our handy Installer&#x27;s not your style? Try the standalone version",
        getmodrinth: "Download From Modrinth",
        getcurseforge: "Download From CurseForge",
        getgithub: "Get Source From GitHub",
      },
      common: {
        irisshaders: "Iris Shaders",
        home: "Home",
        about: "Learn More",
        download: "Download Now",
        dark: " Dark mode",
        light: " Light mode",
        footer1: "About the Iris project",
        footerdesc1:
          "The Iris Project is a collaborative open-source project created by a team of passionate developers seeking to make the Minecraft shaders experience the best that it can be. Iris is developed by the community, for the community.",
        footer2: "Useful links",
        curseforge: "Iris on CurseForge",
        modrinth: "Iris on Modrinth",
        github: "GitHub",
        discord: "Discord",
        patreon: "Patreon",
        copyright: "© Copyright 2024. Licensed under the LGPLv3.",
      },
    },
    en_US: {
      index: {
        title: "This is Iris",
        subheading: "A lens into a new era of minecraft graphics",
        or: "or",
        continue: "Continue Reading",
        heading1: "Why Iris?",
        subheading1: "This is what makes Iris different",
        card1: "Great mod Compatibility",
        carddesc1:
          "Iris is committed to ensuring mod compatibility as a first priority, and is already compatible with many of your favorite mods!",
        card2: "Modern Design",
        carddesc2:
          "Iris has been built from the ground up to be extensible and easy to update. Say goodbye to weeks of waiting to use shaders on the new Minecraft version!",
        card3: "Free and Open Source",
        carddesc3:
          "Iris is an open source mod that anyone can contribute to. This allows Iris to improve by facilitating collaboration.",
        heading2: "Features",
        subheading2: "What Iris has to offer",
        image1: "OptiFine Parity",
        imagedesc1:
          "Iris aims to have full support for all past and present OptiFine shader packs, and number of packs supported by Iris is constantly and rapidly growing!<span class='text-span-2'><br>Screenshot by IMS, Kappa v5</span>",
        image2: "Works with Sodium",
        imagedesc2:
          "Iris is compatible with CaffeineMC optimization mods such as Sodium and Phosphor, enabling stunning graphics at frames comparable to or even better than vanilla.<br><span class='text-span-2'>Screenshot by IMS, Nostalgia v4</span>",
        heading3: "The Iris Advantage",
        subheading3: "New rendering techniques that put you ahead of the game",
        shadows: "Shadows",
        entities: "Entities",
        screenshottitle1: "Performance-Optimized Shadows",
        screenshotdesc1:
          "Iris uses a technique called Shadow Frustum Culling to decrease the overhead of one of the biggest performance hogs of a shader - the shadows. Using Iris&#x27;s shadow frustum culling, you&#x27;ll be able to reach higher frame rates without sacrificing the quality of volumetric lighting or shadows.<br><span class='text-span-2'>Screenshot by IMS, Kappa v5</span>",
        screenshottitle2: "Efficient Entity Rendering",
        screenshotdesc2:
          "Iris improves the way that Minecraft renders entities and block entities like chests, pigs, and item frames. This trick even works with shaders disabled, and in worlds with a lot of entities, it can boost vanilla performance by up to 60 percent. Shadow rendering sees an especially large improvement, making areas that were once unplayable with shaders into places where your FPS is surprisingly smooth!<br><span class='text-span-2'>Screenshot by kinzuu_music</span>",
        stillcurious:
          "Still curious? <a href='about.html'>Learn More</a><link rel='prefetch' href='/about.html'>.",
      },
      about: {
        abouttitle: "About IrisShaders",
        heading: "The Iris Project",
        subheading: "Learn more about the Shader Sensation",
        aboutproject: "About the Project",
        messageheading:
          "A message from the founder and lead developer at Iris Shaders",
        message:
          "Iris was created to fill a void that I saw in the Minecraft customization and graphical enhancement community: the lack of an open-source shaders mod that would let me load my favorite shader packs on modern versions of the game, while retaining performance and compatibility with modpacks. OptiFine, the current dominant mod for loading shader packs, has restrictive licensing that firmly stands in the way of any sort of tinkering, and is fairly notorious for having compatibility issues with the mods that I like. It&#x27;s also mutually incompatible with Sodium, the best rendering optimization mod in existence by a large margin. ShadersMod was never updated past 1.12, and it lacks support for many of the many modern popular shaderpacks. So I created Iris, to try and solve these issues, and also address many other longstanding issues with shader packs.<br><br>I first and foremost develop Iris to meet my own needs of a performance-oriented shaders mod with good compatibility and potential for tinkering. Iris when paired with Sodium delivers great performance on my machine, finally making it fully possible for me to actually play with shaders instead of just periodically switching them on to take pretty screenshots, then switching them off once I get tired of frame drops. Of course, as it turns out, I&#x27;m far from the only person who benefits from the development of Iris, which is why I&#x27;ve decided to release it to the public as an open-source mod.<br><br>Iris has a public stable release for 1.18.2, 1.19.2, and 1.19.3, as well as a public beta for snapshots. Iris is still in heavy development and gets new improvements very often, and is progressing very rapidly!",
        performance: "Performance",
        performanceheading: "See how the frames stack up with Iris",
        vanilla: "Vanilla Only",
        vanillamessage:
          "The current version of Minecraft has a very old codebase, and many say that it is in sore need of a rewrite, especially when it comes to graphics. Blaze 3D rendering, added in 1.15, was an attempt to alleviate this somewhat, but in many ways only worsened the problem. In 1.17, Minecraft is moving to OpenGL Core 3.2 and Java 16, but so far no significant changes have been implemented that utilize the performance enhancements of these systems. Minecraft before 1.17 also did not natively support shaders, and even since 1.17 released, shader support is very limited. However, Minecraft is known for it&#x27;s low-overhead minimalistic graphics, and provides a strong foundation for high-performance shader-based graphics.",
        sodium: "Vanilla + <span class='text-span-4'>Sodium</span>",
        sodiummessage:
          "Sodium is a fabric mod that rewrites parts of the vanilla rendering system to optimize for performance in a way that no other mod has done before. Sodium is actively maintained and updated, and aims to be compatible with most other Fabric mods for maximum FPS even in the biggest modpacks. Its sibling mods, Lithium, Phosphor, and Hydrogen, can all be used in conjunction with sodium to each optimize a different aspect of the game, whether it be ticking, lighting, or memory respectively. These mods together can boost FPS to 150% or more of vanilla performance for any player out there, whether you&#x27;re aiming for maximum frames to give you that PvP edge, or whether Sodium and the like are the only mods that can make the game playable on the hardware you have at hand.",
        sodiumiris:
          "Vanilla + <span class='text-span-4'>Sodium</span> + <span class='text-span-5'>Iris</span>",
        sodiumirismessage:
          "Iris builds on both Sodium and Vanilla by providing something that no standalone fabric mod has had before: support for existing custom shaders. And because Iris stacks with Sodium and Vanilla, you can get shaders at remarkable frame rates, without the need for expensive hardware or experimental game modifications. The extra processes that Iris performs only reduce performance by 10-15 percent, and with sodium installed the performance stays well above vanilla performance! This transfers directly to shaders, with most popular shaders consistently running at or above 60 fps, even on 5 and 6 year old hardware!",
        screenshot: "Screenshot Gallery",
        screenshotsubheading: "See what iris has to offer",
        screenshot1: "Captured by Guardian using SEUS v11",
        screenshot2: "Captured by Guardian using Sildurs Extreme VL",
        screenshot3: "Captured by FoundationGames using Complementary",
        screenshot4: "Captured by IMS using Sildurs Vibrant Extreme VL",
        screenshot5: "Captured by IMS using BSL v8",
        screenshot6: "Captured by IMS using Complementary v4.0",
        screenshot7: "Captured by IMS using Complementary v4.0",
        screenshot8: "Captured by IMS using SEUS Renewed",
        screenshot9: "Captured by IMS using Complementary v4.0",
        screenshot10: "Captured by IMS using Complementary v4.0",
        screenshot11: "Captured by kinzuu_music using Complementary v4.0",
        screenshot12: "Captured by Justsnoopy30 using Complementary v4.0 BE",
        note: "Note - BE indicates screenshots that feature content from the BetterEnd mod by paulevs.",
      },
      download: {
        downloadiris: "Download Now - IrisShaders",
        heading: "The Iris Installer",
        subheading: "designed to streamline your Iris experience",
        description:
          "Iris&#x27;s installer will automatically download and install Iris and Sodium for great graphics at smooth framerates. Simply run the installer, choose your version, and hit install. Don&#x27;t believe us? Try it for yourself!",
        downloadjar: "Download Universal JAR",
        alternatedownloads: "Alternate Downloads",
        alternatedownloadsubheading:
          "Our handy Installer&#x27;s not your style? Try the standalone version",
        getmodrinth: "Download From Modrinth",
        getcurseforge: "Download From CurseForge",
        getgithub: "Get Source From GitHub",
      },
      common: {
        irisshaders: "Iris Shaders",
        home: "Home",
        about: "Learn More",
        download: "Download Now",
        dark: " Dark mode",
        light: " Light mode",
        footer1: "About the Iris project",
        footerdesc1:
          "The Iris Project is a collaborative open-source project created by a team of passionate developers seeking to make the Minecraft shaders experience the best that it can be. Iris is developed by the community, for the community.",
        footer2: "Useful links",
        curseforge: "Iris on CurseForge",
        modrinth: "Iris on Modrinth",
        github: "GitHub",
        discord: "Discord",
        patreon: "Patreon",
        copyright: "© Copyright 2024. Licensed under the LGPLv3.",
      },
    },
    es: {
      index: {
        title: "Esto es Iris",
        subheading: "La lente a una nueva era de gráficos en minecraft",
        or: "o",
        continue: "Seguir leyendo",
        heading1: "¿Por qué Iris?",
        subheading1: "Esto es lo que hace a Iris diferente",
        card1: "Gran compatibilidad con mods",
        carddesc1:
          "Iris está comprometida a asegurar la compatibilidad con mods como prioridad, ¡y ya es compatible con muchos de tus mods favoritos!",
        card2: "Diseño Moderno",
        carddesc2:
          "Iris ha sido construida desde el principio para ser extendible y fácil de actualizar. ¡Di adiós a semanas de espera para usar shaders en la nueva actualización de Minecraft!",
        card3: "Libre y de Código Abierto",
        carddesc3:
          "Iris es un mod de código abierto al que cualquiera puede contribuir. Esto permite a Iris mejorar al facilitar la colaboración.",
        heading2: "Características",
        subheading2: "Lo que Iris tiene que ofrecer",
        image1: "Paridad con OptiFine",
        imagedesc1:
          "Iris apunta a tener soporte completo para todos los shaderpacks de OptiFine pasados y actuales, ¡y el número de packs soportados por Iris aumenta constantemente!<span class='text-span-2'><br>Captura por Niko</span>",
        image2: "Funciona con Sodium",
        imagedesc2:
          "Iris es compatible con los mods de optimización de CaffeineMC, como Sodium y Phosphor, permitiendo gráficos impresionantes con FPS comparables o incluso mejores que en vanilla.<br><span class='text-span-2'>Captura por Guardian</span>",
        heading3: "La ventaja de Iris",
        subheading3:
          "Nuevas técnicas de renderizado que te ponen en la delantera del juego",
        shadows: "Sombras",
        entities: "Entidades",
        screenshottitle1: "Sombras Optimizadas para el Rendimiento",
        screenshotdesc1:
          "Iris usa una técnica llamada Frustum Culling de Sombras para reducir los costes de uno de los mayores consumidores de rendimiento de un shader - las sombras. Usando el frustrum culling de Iris, serás capaz de obtener más altos FPS sin sacrificar la calidad de la iluminación volumétrica o las sombras.<br><span class='text-span-2'>Captura por FoundationGames</span>",
        screenshottitle2: "Renderizado de Entidades Eficiente",
        screenshotdesc2:
          "Iris mejora la forma en que Minecraft renderiza entidades y bloques con entidades como cofres, cerdos, o marcos para objetos. Este truco funciona hasta con los shaders desactivados, y en mundos con muchas entidades, puede hasta mejorar el rendimiento en vanilla por hasta un 60 por ciento. La renderización de sombras encuentra una mejora especialmente grande, ¡haciendo zonas que una vez fueron injugables con shaders sitios donde tus FPS són sorprendientemente estables!<br><span class='text-span-2'>Captura por kinzuu_music</span>",
      },
      about: {
        abouttitle: "Acerca de IrisShaders",
        screenshotdesc2:
          "Iris mejora la forma en que Minecraft renderiza entidades y bloques con entidades como cofres, cerdos, o marcos para objetos. Este truco funciona hasta con los shaders desactivados, y en mundos con muchas entidades, puede hasta mejorar el rendimiento en vanilla por hasta un 60 por ciento. La renderización de sombras encuentra una mejora especialmente grande, ¡haciendo zonas que una vez fueron injugables con shaders sitios donde tus FPS són sorprendientemente estables!<br><span class='text-span-2'>Captura por kinzuu_music</span>",
        heading: "El proyecto Iris",
        subheading: "Aprende más sobre la sensación de shaders",
        aboutproject: "Acerca del proyecto",
        messageheading:
          "Un mensaje del fundador y principal desarrollador de Iris Shaders",
        message:
          "Iris fue creado para llenar un vacío que vi en la comunidad de personalización y mejora gráfica de Minecraft: la falta de un mod para shaders de código abierto que me permitiese cargar mis shader packs favoritos en versiones modernas del juego, manteniendo el rendimiento y la compatibilidad con modpacks. OptiFine, el mod actualmente dominante para cargar shader packs, tiene una licencia restrictiva que impide jugar con tus opciones, y es muy conocido por tener problemas de compatibilidad con los mods que me gustan. También es mutuamente incompatible con Sodium, el mejor mod de optimización de renderizado que existe por un gran margen. ShadersMod nunca se actualizó después de la 1.12, y no soporta muchos de los nuevos shaderpacks modernos. Así que creé Iris, para intentar resolver estos problemas, y además poner solución a muchos otros longevos problemas con los shader packs.<br><br>Principalmente desarrollo Iris para mi propia necesidad de un mod de shaders orientado al rendimiento con buena compatibilidad y compatibilidad para jugar con el programa. Cuando unes Iris con Sodium obtengo un gran rendimiento en mi ordenador, haciendo completamente posible para mí el jugar con shaders en vez de a veces activarlos para tomar capturas de pantalla bonitas, y luego apagarlos de nuevo en cuanto me canso de las caídas de frames. Por supuesto, como parece que es, no soy ni de lejos la única persona que se favorece del desarrollo de Iris, razón por la que decidí lanzarlo al público como un mod de código abierto.<br><br>Iris tiene una versión estable para la 1.16 que funciona con una versión algo modificada de Sodium, y una beta pública para la 1.17 que aun no funciona con Sodium (ahora mismo no hay versión oficial de Sodium para la 1.17). ¡Iris está aun en fuerte desarrollo y trae nuevas mejoras cada semana, y está progresando muy rápidamente!",
        performance: "Rendimiento",
        performanceheading: "Mira como los frames se amontonan con Iris",
        vanilla: "Sólo Vanilla",
        vanillamessage:
          "Minecraft Vanilla tiene una base de código muy anticuada, y muchos dicen que tiene una gran necesidad de ser reescrito, especialmente en lo que se refiere a gráficos. El renderizado Blaze 3D, añadido en la 1.15, fue un intento de aliviar esto de alguna forma, pero en muchos respectos sólo empeoró este problema. En la 1.17, Minecraft está moviendose a OpenGL Core 3.2 y Java 16, pero hasta ahora no ha habido cambios significativos para utilitzar las mejoras de rendimiento de estos sistemas. Minecraft antes de la 1.17 tampoco soportaba nativamente shaders, e incluso desde que la 1.17 fue lanzada, el soporte para shader es muy limitado. Sin embargo, Minecraft es conocido por sus gráficos minimalistas de bajo coste, y provee de unos buenos cimientos para gráficos basados en shaders de alto rendimiento.",
        sodium: "Vanilla + <span class='text-span-4'>Sodium</span>",
        sodiummessage:
          "Sodium es un mod para fabric que reescribe partes del sistema de renderizado de vanilla para optimizar el rendimiento de una forma de la que ningún otro mod lo ha hecho antes. Sodium está activamente trabajado y actualizado, y apunta a ser compatible con la mayoría del resto de mods de Fabric para los máximos FPS incluso en los modpacks más densos. Sus mods hermanos, Lithium, Phosphor y Hydrogen, pueden todos ser usados en tándem con Sodium para cada uno optimizar un aspecto diferente del juego, ya sean los ciclos del juego, la iluminación, o el uso de memoria respectivamente. Esos mods juntos pueden aumentar los FPS a un 150% o más que el rendimiento de vanilla para cualquier jugador, ya estés apuntando a los máximos frames para ese margen del PvP, o si Sodium y similares son los únicos mods que pueden hacer el juego jugable en el hardware que tienes a mano.",
        sodiumiris:
          "Vanilla + <span class='text-span-4'>Sodium</span> + <span class='text-span-3'>Iris</span>",
        sodiumirismessage:
          "Iris está construido sobre ambos Sodium y Vanilla dando soporte a lo que ningún mod de fabric ha dado por sí mismo: soporte para shaders existentes. Y como Iris se suma con Sodium y Vanilla, puedes obtener shaders con FPS remarcables, sin la necesidad de hardware caro o modificaciones del juego experimentales. Los procesos extra que Iris hace solo reducen el rendimiento por un 10-15 por ciento, y con sodium instalado el rendimiento se mantiene muy por encima del rendimiento de vanilla. En un futuro, Iris estará completamente integrado y directo al grano, y tendrá aun más optimizaciones de renderizado por sí mismo, permitiendo que Sodium e Iris juntos sean mejores que cualquiera de ellos por separado. Y esas mejoras de rendimiento se transfieren directamente a los shaders, con los shaders más populares funcionando consistentemente a o por encima de 60 fps, ¡incluso en hardware de hace 5 y 6 años!",
        screenshot: "Galería de Capturas",
        screenshotsubheading: "Mira lo que Iris te puede ofrecer",
        screenshot1: "Capturado por Guardian usando SEUS v11",
        screenshot2: "Capturado por Guardian usando Sildurs Extreme VL",
        screenshot3: "Capturado por FoundationGames usando Complementary",
        screenshot4: "Capturado por IMS usando Sildurs Vibrant Extreme VL",
        screenshot5: "Capturado por IMS usando BSL v8",
        screenshot6: "Capturado por IMS usando Complementary v4.0",
        screenshot7: "Capturado por IMS usando Complementary v4.0",
        screenshot8: "Capturado por IMS usando SEUS Renewed",
        screenshot9: "Capturado por IMS usando Complementary v4.0",
        screenshot10: "Capturado por IMS usando Complementary v4.0",
        screenshot11: "Capturado por kinzuu_music usando Complementary v4.0",
        screenshot12: "Capturado por Justsnoopy30 usando Complementary v4.0 BE",
        note: "Nota - BE indica capturas con contenido del mod BetterEnd por paulevs",
      },
      download: {
        downloadiris: "Descargar Ahora - IrisShaders",
        heading: "El Instalador de Iris",
        subheading: "diseñado para simplificar tu experiencia con Iris",
        description:
          "El instalador de Iris descargará e instalará Iris y Sodium para increíbles gráficos a buenos FPS. Simplemente ejecuta el instalador, elige tu versión, y pulsa instalar. ¿No nos crees? Pruébalo tú mismo.",
        downloadjar: "Descargar JAR Universal",
        alternatedownloads: "Descargas alternativas",
        alternatedownloadsubheading:
          "¿Nuestro práctico instalador no es tu estilo? Descarga el mod por sí mismo",
        getmodrinth: "Descargar en Modrinth",
        getcurseforge: "Descargar en CurseForge",
        getgithub: "Obtén el código en GitHub",
      },
      common: {
        home: "Inicio",
        about: "Aprende más",
        download: "Descargar ahora",
        dark: " Modo oscuro",
        light: " Modo claro",
        footer1: "Acerca del Proyecto Iris",
        footerdesc1:
          "El Proyecto Iris Project es un proyecto colaborativo y de código abierto creado por un equipo de desarroladores apasionados intentando hacer la experiencia de shaders en Minecraft la mejor posible. Iris está desarrolado por la comunidad, para la comunidad.",
        footer2: "Enlaces útiles",
        curseforge: "Iris en CurseForge",
        modrinth: "Iris en Modrinth",
        copyright:
          "© Copyright 2024 IrisShaders. Todos los derechos reservados.",
      },
    },
    fr: {
      index: {
        title: "Voici Iris",
        subheading:
          "Une ouverture vers une nouvelle ère des graphismes minecraft",
        or: "ou",
        continue: "Continuer à lire",
        heading1: "Pourquoi choisir Iris ?",
        subheading1: "Voici ce qui rend Iris différent",
        card1: "Bonne compatibilité avec les autres mods",
        carddesc1:
          "Iris s'engage en première priorité à assurer la compatibilité avec les différents mods et est déjà compatible avec beaucoup de vos mods préférés !",
        card2: "Conception moderne",
        carddesc2:
          "Iris a été conçu dès le départ pour être extensible et facile à mettre à jour. Dites adieu aux semaines d'attente pour utiliser les shaders sur la nouvelle version de Minecraft !",
        card3: "Gratuit et Open Source",
        carddesc3:
          "Iris est un mod open source auquel tout le monde peut contribuer. Cela permet à Iris de s'améliorer en facilitant la collaboration avec la communauté.",
        heading2: "Fonctionnalités",
        subheading2: "Ce qu'Iris peut vous offrir",
        image1: "Concurrence avec OptiFine",
        imagedesc1:
          "Iris vise à avoir un support complet pour tous les shaderpacks OptiFine passés et présents, et le nombre de packs supportés par Iris augmente constamment et rapidement !<span class='text-span-2'><br>Capture d'écran par Niko</span>",
        image2: "Compatible avec Sodium",
        imagedesc2:
          "Iris est compatible avec les mods d'optimisation CaffeineMC tels que Sodium et Phosphor, permettant des graphismes époustouflants et des images comparables ou même meilleures que Vanilla.<br><span class='text-span-2'>Capture d'écran par Guardian</span>",
        heading3: "L'avantage Iris",
        subheading3:
          "De nouvelles techniques de rendu qui vous donnent une longueur d'avance",
        shadows: "Ombres",
        entities: "Entités",
        screenshottitle1: "Ombres optimisées pour les performances",
        screenshotdesc1:
          "Iris utilise une technique appelée Shadow Frustum Culling pour diminuer les frais généraux de l'un des plus gros accapareurs de performances d'un shader : les ombres. En utilisant le shadow frustum culling d&#x27;Iris, vous pourrez atteindre des fréquences d&#x27;image plus élevées sans sacrifier la qualité de l&#x27;éclairage volumétrique ou des ombres.<br><span class='text-span-2'>Capture d'écran par IMS, Kappa v5</span>",
        screenshottitle2: "Rendu d'entité efficace",
        screenshotdesc2:
          "Iris améliore la façon dont Minecraft affiche les entités et blocks les entités comme les coffres, les cochons et les cadres d'objets. Cette astuce fonctionne même avec les shaders désactivés, et dans les mondes avec beaucoup d'entités, elle peut augmenter les performances de Vanilla jusqu'à 60%. Le rendu des ombres connaît une amélioration particulièrement importante, transformant des zones autrefois injouables avec les shaders en des endroits où votre FPS est étonnamment fluide !<br><span class='text-span-2'>Capture d'écran par kinzuu_music</span>",
        stillcurious:
          "Curieux ? <a href='about.html'>En savoir plus</a><link rel='prefetch' href='/about.html'>.",
      },
      about: {
        abouttitle: "À propos d'Iris",
        heading: "Le projet Iris",
        subheading: "À propos des shaders",
        aboutproject: "À propos du projet",
        messageheading:
          "Un message du fondateur et développeur principal chez Iris Shaders",
        message:
          "Iris a été créé pour combler un vide que j'ai vu dans la communauté de personnalisation et d'amélioration graphique de Minecraft : l'absence d'un mod de shaders open source qui me permettrait de charger mes packs de shaders préférés sur les versions modernes du jeu, tout en conservant les performances et la compatibilité avec les mods. OptiFine, le mod dominant actuel pour l'utilisation des packs de shaders, a une licence restrictive qui s'oppose fermement à toute sorte de bricolage, et est assez connu pour avoir des problèmes de compatibilité avec les mods que j'aime. Il est également mutuellement incompatible avec Sodium, le meilleur mod d'optimisation de rendu existant de loin. ShadersMod n'a jamais été mis à jour après la 1.12, et il ne prend pas en charge bon nombre des nombreux shaderpacks populaires modernes. J'ai donc créé Iris pour essayer de résoudre ces problèmes, et également pour résoudre de nombreux autres problèmes de longue date avec les packs de shaders.<br><br>Je développe avant tout Iris pour répondre à mes propres besoins d'un mod de shaders orienté performance avec une bonne compatibilité et un potentiel de bricolage. Iris, lorsqu'il est associé à Sodium, offre d'excellentes performances sur ma machine, me permettant enfin de jouer avec des shaders au lieu de les allumer périodiquement pour prendre de jolies captures d'écran, puis de les éteindre une fois que je suis fatigué des chutes d'images. Bien sûr, il s'avère que je suis loin d'être la seule personne à vouloir bénéficier du développement d'Iris, c'est pourquoi j'ai décidé de le rendre public en tant que mod open-source.<br><br>Iris a une version publique stable pour les versions 1.16.5, 1.17.1, 1.18.2, 1.19 qui doit être installé avec Sodium obligatoirement. Iris est encore en plein développement et bénéficie de nouvelles améliorations chaque semaine, et progresse très rapidement !",
        performance: "Performance",
        performanceheading: "Regardez les fréquences d'image avec Iris",
        vanilla: "Vanilla uniquement",
        vanillamessage:
          "La version Vanilla de Minecraft a un très vieux code, et beaucoup disent qu'il a grand besoin d'une réécriture, surtout en ce qui concerne les graphismes. Le rendu Blaze 3D, ajouté dans la version 1.15, était une tentative d'atténuer quelque peu ce problème, mais à bien des égards, il n'a fait qu'aggraver le problème. Dans la version 1.17, Minecraft passe à OpenGL Core 3.2 et Java 16, mais jusqu'à présent, aucun changement significatif n'a été mis en œuvre pour utiliser les améliorations de performances de ces systèmes. Minecraft avant la version 1.17 ne prenait pas non plus en charge nativement les shaders, et même depuis la sortie de la version 1.17, la prise en charge des shaders est très limitée. Cependant, Minecraft est connu pour ses graphismes minimalistes à faible surcharge et fournit une base solide pour des graphismes hautes performances basés sur des shaders.",
        sodium: "Vanilla + <span class='text-span-4'>Sodium</span>",
        sodiummessage:
          "Sodium est un mod Fabric qui réécrit des parties du système de rendu vanilla pour optimiser les performances d'une manière qu'aucun autre mod n'a fait auparavant. Sodium est activement maintenu et mis à jour, et vise à être compatible avec la plupart des autres mods Fabric pour un maximum de FPS, même dans les modpacks les plus denses. Ses mods frères, Lithium et Phosphor, peuvent tous être utilisés avec Sodium pour chacun optimiser un aspect différent du jeu, qu'il s'agisse respectivement de ticking, d'éclairage. Ensemble, ces mods peuvent augmenter les FPS de 150% ou plus par rapport des performances vanilla pour n'importe quel joueur, que vous visiez un maximum d'FPS pour vous donner un avantage PvP, ou que Sodium et autres soient les seuls mods qui peuvent faire le jeu jouable sur le matériel dont vous disposez.",
        sodiumiris:
          "Vanilla + <span class='text-span-4'>Sodium</span> + <span class='text-span-3'>Iris</span>",
        sodiumirismessage:
          "Iris s'appuie à la fois sur Sodium et Vanilla en fournissant quelque chose qu'aucun mod Fabric n'avait auparavant : la prise en charge des shaders personnalisés existants. Et parce qu'Iris s'empile avec Sodium et Vanilla, vous pouvez obtenir des shaders à des fréquences d'images remarquables, sans avoir besoin de matériel coûteux ou de modifications de jeu expérimentale. Les processus supplémentaires exécutés par Iris ne réduisent les performances que de 10 à 15 %, et avec sodium installé, les performances restent bien au-dessus des performances de vanilla. À l'avenir, Iris sera entièrement intégré et aura même ses propres optimisations de rendu, permettant à Sodium et Iris ensemble d'être meilleurs que l'un ou l'autre seul. Et ces augmentations de performances sont transférées directement aux shaders, les shaders les plus populaires s'exécutant constamment à 60 fps ou au-dessus, même sur du matériel de cinq et six ans !",
        screenshot: "Gallerie de capture d'écrans",
        screenshotsubheading: "Voici ce que Iris a à offrir",
        screenshot1: "Capture d'écran par Guardian utilisant SEUS v11",
        screenshot2:
          "Capture d'écran par Guardian utilisant Sildurs Extreme VL",
        screenshot3:
          "Capture d'écran par FoundationGames utilisant Complementary",
        screenshot4:
          "Capture d'écran par IMS utilisant Sildurs Vibrant Extreme VL",
        screenshot5: "Capture d'écran par IMS utilisant BSL v8",
        screenshot6: "Capture d'écran par IMS utilisant Complementary v4.0",
        screenshot7: "Capture d'écran par IMS utilisant Complementary v4.0",
        screenshot8: "Capture d'écran par IMS utilisant SEUS Renewed",
        screenshot9: "Capture d'écran par IMS utilisant Complementary v4.0",
        screenshot10: "Capture d'écran par IMS utilisant Complementary v4.0",
        screenshot11:
          "Capture d'écran par kinzuu_music utilisant Complementary v4.0",
        screenshot12:
          "Capture d'écran par Justsnoopy30 utilisant Complementary v4.0 BE",
        note: "Remarque - BE indique des captures d'écran qui utilisent le mod BetterEnd de paulevs",
      },
      download: {
        downloadiris: "Télécharger - IrisShaders",
        heading: "L'installateur Iris",
        subheading: "conçu pour améliorer votre expérience Iris",
        description:
          "Le programme d'installation d'Iris téléchargera et installera automatiquement Iris et Sodium pour de superbes graphismes à des fréquences d'images fluides. Exécutez simplement le programme d'installation, choisissez votre version et cliquez sur Installer. Vous ne nous croyez pas ? Essayez-le par vous-même.",
        downloadjar: "Télécharger le JAR universel",
        alternatedownloads: "Téléchargements alternatifs",
        alternatedownloadsubheading:
          "Notre installateur pratique n'est pas votre style ? Essayez la version autonome",
        getmodrinth: "Télécharger depuis Modrinth",
        getcurseforge: "Télécharger depuis CurseForge",
        getgithub: "Voir le code source sur GitHub",
      },
      common: {
        home: "Menu",
        about: "À propos",
        download: "Télécharger",
        dark: " Mode sombre",
        light: "Mode clair",
        footer1: "À propos du projet Iris",
        footerdesc1:
          "Le projet Iris est un projet collaboratif open source créé par une équipe de développeurs passionnés cherchant à faire en sorte que l'éxperience des shaders Minecraft est la meilleure possible. Iris est développé par la communauté, pour la communauté",
        footer2: "Liens utiles",
        curseforge: "Iris sur CurseForge",
        modrinth: "Iris sur Modrinth",
        copyright: "© Copyright 2024 IrisShaders. Tous droits réservés.",
      },
    },
    nl: {
      index: {
        title: "Dit is Iris",
        subheading: "Een lens naar een nieuw tijdperk van minecraft graphics",
        or: "of",
        continue: "Door gaan met lezen",
        heading1: "Waarom Iris?",
        subheading1: "Dit is wat Iris anders maakt",
        card1: "Goede mod compatibiliteit",
        carddesc1:
          "Iris zet zich in om mod compatibiliteit als eerste prioriteit te zetten, en werkt al met veel van jouw favorite mods!",
        card2: "Modern Design",
        carddesc2:
          "Iris is vanaf de grond opgebouwd om uitbreidbaar en eenvoudig te updaten is. Zeg vaarwel op weken of waiting om shaders te gebruiken op de nieuwe Minecraft versie!",
        card3: "Gratis and Open Source",
        carddesc3:
          "Iris is een open source mod waar iedereen aan kan bijdragen. Dit maakt het mogelijk Iris te verbeteren door het faciliteren van samenwerking.",
        heading2: "Functies",
        subheading2: "Wat heeft Iris aan te bieden?",
        image1: "OptiFine Gelijkheid",
        imagedesc1:
          "Iris streeft naar volledige ondersteuning voor alle oudere en huidige OptiFine shaderpacks, en het aantal packs dat door Iris wordt ondersteund, groeit voortdurend en snel!<span class='text-span-2'><br>Screenshot door Niko</span>",
        image2: "Werkt met Sodium",
        imagedesc2:
          "Iris werkt met CaffeineMC optimalisatie mods zoals Sodium en Phosphor, waardoor verbluffende graphics mogelijk zijn met frames die vergelijkbaar zijn met of zelfs beter zijn dan vanilla.<br><span class='text-span-2'>Screenshot door Guardian</span>",
        heading3: "De Iris voordeel",
        subheading3:
          "Nieuwe rendering technieken waarmee u een voorsprong heeft in de game",
        shadows: "Schaduwen",
        entities: "Entiteiten",
        screenshottitle1: " prestatie-geoptimaliseerde schaduwen",
        screenshotdesc1:
          "Iris gebruikt een techniek genaamt Schaduw Frustum Culling om de overhead van één van de grootste prestatievarkens van een shader te verminderen - De schaduws. Met Iris&#x27;s schaduw frustum culling, kan je hogere frames halen zonder de de kwaliteit van volumetrische verlichting of schaduwen op te offeren.<br><span class='text-span-2'>Screenshot door FoundationGames</span>",
        screenshottitle2: "Efficiënte entiteit Rendering",
        screenshotdesc2:
          "Iris verbetert hoe Minecraft entiteiten rendert en blok entiteiten zoals chests, pigs, en voorwerplijsten. Deze truc werkt zelfs met shaders uit, en in werelden met veel entiteiten, kan het vanilla prestatie verbeteren tot 60 procent. Schaduw rendering ziet vooral een grote verbetering, met het maken van gebieden die ooit onspeelbaar waren met shaders in plaatsen waar je FPS verrassend soepel is! <br><span class='text-span-2'>Screenshot door kinzuu_music</span>",
        stillcurious:
          "Nog steeds nieuwsgierig? <a href='about.html'>Leer Meer</a><link rel='prefetch' href='/about.html'>.",
      },
      about: {
        abouttitle: "Over IrisShaders",
        heading: "het Iris Project",
        subheading: "Leer meer over de Shader Sensatie",
        aboutproject: "over het Project",
        messageheading:
          "een bericht van de oprichter en hhoofdontwikkelaar bij Iris Shaders",
        message:
          "Iris is gemaakt om een leegte te vullen die ik zag in de Minecraft gemeenschap voor aanpassing en grafische verbetering: het ontbreken van een open-source shaders mod waarmee ik mijn favoriete shaderpacks op moderne versies van de game kon laden, terwijl de prestaties en compatibiliteit met modpacks goed bleven. OptiFine, de huidige dominante mod voor het laden van shaderpacks, heeft restrictieve licenties die in de weg staat voor enige soort of verandering, en is vrij berucht vanwege het hebben van compatibiliteitsproblemen met de mods die ik leuk vind. Het is wekr ook niet met Sodium, de beste rendering optimalisatie mod die er bestaat met een grote marge. ShadersMod is nooit na 1.12 bijgewerkt en biedt geen ondersteuning voor veel van de vele moderne populaire shaderpacks. Dus heb ik Iris gemaakt om te proberen dit problemen op te lossen, en ook om veel andere langdurige problemen met shaderpacks aan te pakken..<br><br>Ik ontwikkel Iris in de eerste plaats om te voldoen aan mijn eigen behoeften aan een prestatiegerichte shadersmod met goede compatibiliteit en potentieel voor verandering. Iris in combinatie met Sodium levert geweldige prestaties op mijn machine, waardoor ik eindelijk volledig met shaders kan spelen in plaats van ze gewoon periodiek in te schakelen om mooie screenshots te maken en ze vervolgens uit te schakelen zodra ik klaar ben met de frame drops. Natuurlijk, zo blijkt, ben ik verre van de enige persoon die profiteert van de ontwikkeling van Iris, daarom heb ik besloten om het als een open-source mod voor het publiek vrij te geven.<br><br>Iris heeft een openbare stabiele release voor 1.16 die werkt met een aangepaste versie van Sodium, en een openbare bètaversie voor 1.17 die momenteel niet werkt met Sodium (momenteel is er geen officiële versie van Sodium voor 1.17). Iris is nog volop in ontwikkeling en krijgt elke week nieuwe verbeteringen en gaat zeer snel vooruit!",
        performance: "Prestaties",
        performanceheading: "Zie hoe de frames het doen met Iris",
        vanilla: "Alleen vanilla",
        vanillamessage:
          "Vanilla Minecraft heeft een hele oude codebase, en velen zeggen dat het dringend herschreven moet worden, vooral als het om graphics gaat. Blaze 3D-rendering, toegevoegd in 1.15, was een poging om dit enigszins te verlichten, maar in veel opzichten verergerde het probleem alleen maar. In 1.17 gaat Minecraft over naar OpenGL Core 3.2 en Java 16, maar tot nu toe zijn er geen significante veranderingen doorgevoerd die gebruikmaken van de prestatieverbeteringen van deze systemen. Minecraft vóór 1.17 ondersteunde ook geen native shaders, en zelfs sinds 1.17 is uitgebracht, is shader-ondersteuning zeer beperkt. Minecraft staat echter bekend om zijn minimalistische graphics met lage overheadkosten en biedt een sterke basis voor krachtige, op shaders gebaseerde graphics.",
        sodium: "Vanilla + <span class='text-span-4'>Sodium</span>",
        sodiummessage:
          "Sodium is een Fabric mod die delen van het vanilla renderingsysteem herschrijft om te optimaliseren voor prestaties op een manier die geen enkele andere mod eerder heeft gedaan. Sodium wordt actief onderhouden en bijgewerkt en streeft ernaar compatibel te zijn met de meeste andere Fabric mods voor maximale FPS, zelfs in de grootste modpacks. De ander mods van de zelfde maker, Lithium, Phosphor en Hydrogen, kunnen allemaal worden gebruikt in combinatie met Sodium om elk een ander aspect van het spel te optimaliseren, of het nu respectievelijk tikken, verlichting of geheugen is. Deze mods samen kunnen FPS verhogen tot 150% of meer van vanilla prestaties voor elke speler die er is, of je nu streeft naar maximale frames om je PvP-voorsprong te geven, of dat Sodium en dergelijke de enige mods zijn die het spel speelbaar maakt op de hardware die je hebt.",
        sodiumiris:
          "Vanilla + <span class='text-span-4'>Sodium</span> + <span class='text-span-3'>Iris</span>",
        sodiumirismessage:
          "Iris bouwt op zowel Sodium als vanilla door iets te bieden dat geen enkele standalone Fabric mod eerder heeft gehad: ondersteuning voor bestaande aangepaste shaders. En omdat Iris op Sodium en vanilla bouwt, kun je shaders krijgen met opmerkelijke framesnelheden, zonder dat je dure hardware of experimentele spelaanpassingen nodig hebt. De extra processen die iris uitvoert, verminderen de prestaties slechts met 10-15 procent, en als Sodium is geïnstalleerd, blijven de prestaties ruim boven de vanilla prestaties. In de toekomst zal Iris volledig geïntegreerd en gestroomlijnd zijn, en zal het zelfs zijn eigen rendering optimalisaties hebben, waardoor Sodium en Iris samen beter zijn dan elk van hen alleen. En deze prestatieverbeteringen worden direct overgedragen naar shaders, waarbij de meeste populaire shaders constant op of boven 60 fps draaien, zelfs op 5 en 6 jaar oude hardware!",
        screenshot: "Screenshot Galerij",
        screenshotsubheading: "Zie wat Iris te offeren heeft",
        screenshot1: "Vastgelegd door Guardian met SEUS v11",
        screenshot2: "Vastgelegd door Guardian met Sildurs Extreme VL",
        screenshot3: "Vastgelegd door FoundationGames met Complementary",
        screenshot4: "Vastgelegd door IMS met Sildurs Vibrant Extreme VL",
        screenshot5: "Vastgelegd door IMS met BSL v8",
        screenshot6: "Vastgelegd door IMS met Complementary v4.0",
        screenshot7: "Vastgelegd door IMS met Complementary v4.0",
        screenshot8: "Vastgelegd door IMS met SEUS Renewed",
        screenshot9: "Vastgelegd door IMS met Complementary v4.0",
        screenshot10: "Vastgelegd door IMS met Complementary v4.0",
        screenshot11: "Vastgelegd door kinzuu_music met Complementary v4.0",
        screenshot12: "Vastgelegd door Justsnoopy30 met Complementary v4.0 BE",
        note: "Opmerking - BE geeft screenshots aan met inhoud van de BetterEnd mod van paulevs",
      },
      download: {
        downloadiris: "Download Nu- IrisShaders",
        heading: "De Iris Installatieprogramma",
        subheading: "ontworpen om uw Iris ervaring te stroomlijnen",
        description:
          "Het installatieprogramma van Iris zal automatisch Iris en Sodium downloaden en installeren voor geweldige graphics met vloeiende framerates. Voer gewoon het installatieprogramma uit, kies uw versie en klik op installeren. Gelooft u ons niet? Probeer het zelf.",
        downloadjar: "Download Universele JAR",
        alternatedownloads: "Alternatieve Downloads",
        alternatedownloadsubheading:
          "Onze handige Installer is niet jouw stijl? Probeer de standalone versie",
        getmodrinth: "Download van Modrinth",
        getcurseforge: "Download van CurseForge",
        getgithub: "Source ophalen van GitHub",
      },
      common: {
        irisshaders: "Iris Shaders",
        home: "Thuis",
        about: "Leer meer",
        download: "Download Nu",
        dark: " Donkere modus",
        light: " Licht modus",
        footer1: "Over het Iris project",
        footerdesc1:
          "Het Iris Project is een gezamenlijk open-source project gecreëerd door een team van gepassioneerde ontwikkelaars die de Minecraft shaders ervaring het beste willen maken. Iris is ontwikkeld door de gemeenschap, voor de gemeenschap.",
        footer2: "Handige links",
        curseforge: "Iris op CurseForge",
        modrinth: "Iris op Modrinth",
        github: "GitHub",
        discord: "Discord",
        patreon: "Patreon",
        copyright: "© Copyright 2024 IrisShaders. Alle rechten voorbehouden.",
      },
    },
    pt_BR: {
      index: {
        title: "Este é o Iris",
        subheading: "O futuro da área gráfica do Minecraft",
        or: "ou",
        continue: "Continue lendo",
        heading1: "Por que usar o Iris?",
        subheading1: "Isso é o que torna o Iris diferente:",
        card1: "Compatibilidade com mods",
        carddesc1:
          "O Iris está comprometido em garantir a compatibilidade total com mods, e já é compatível com a maioria dos mods disponíveis!",
        card2: "Design moderno",
        carddesc2:
          "Iris foi criado pensando em expansividade e atualizações. Adeus à espera de semanas para usar shaders a cada nova versão do Minecraft!",
        card3: "Gratuito e Open Source",
        carddesc3:
          "O Iris é um mod open source, onde qualquer um pode contribuir, assim, permitindo melhorias e compatibilidade aumentada por facilitar a colaboração.",
        heading2: "Características",
        subheading2: "O que o Iris tem a oferecer",
        image1: "Paridade com OptiFine",
        imagedesc1:
          "O Iris tem como objetivo suportar todas as shaders feitas para o OptiFine, até mesmo as antigas. E o número de shaders compatíveis não para de subir!<span class='text-span-2'><br>Capturada por Niko</span>",
        image2: "Funciona com o Sodium",
        imagedesc2:
          "O Iris é compatível com os mods de optimização do CaffeineMC, como Sodium e Phosphor, permitindo belos gráficos com FPS geralmente melhores que o Minecraft Vanilla.<br><span class='text-span-2'>Capturada por Guardian</span>",
        heading3: "A vantagem do Iris",
        subheading3:
          "Novas técnicas de renderização que o colocam à frente do jogo",
        shadows: "Sombras",
        entities: "Entidades",
        screenshottitle1: "Sombras otimizadas para uma melhor performance",
        screenshotdesc1:
          "Iris usa uma técnica chamada 'Shadow Frustum Culling', que diminui um dos maiores vilões de desmpenho - as sombras. Usando o Shadow Frustum Culling do Iris, você conseguirá mais frames sem sacrificar a qualidade da iluminação volumétrica ou das sombras.<br><span class='text-span-2'>Capturada  por FoundationGames</span>",
        screenshottitle2: "Renderização eficiente de entidades",
        screenshotdesc2:
          "Iris melhora a forma que o Minecraft renderiza entidades e blocos com entidades como baús, porcos e molduras. Esse truque funciona até mesmo com shaders desativados, inclusive em mundos cheios de entidades, podendo melhorar a performance do Minecraft vanilla em até 60%! A renderização das sombras é a principal melhoria trazida pelo mod, fazendo com que áreas onde uma vez eram impossíveis de se jogar com shaders, agora ficam surpreendentemente estáveis!<br><span class='text-span-2'>Capturada por kinzuu_music</span>",
        stillcurious:
          "Ainda curioso? <a href='about.html'>Saiba Mais</a><link rel='prefetch' href='/about.html'>.",
      },
      about: {
        abouttitle: "Sobre o Iris",
        heading: "O Projeto Iris",
        subheading: "Saiba mais sobre a nova geração de Shaders",
        aboutproject: "Sobre o projeto",
        messageheading:
          "Uma mensagem do fundador e desenvolvedor-chefe do Iris Shaders",
        message:
          "O Iris foi criado para preencher um vazio que eu via na comunidade de customização e melhoria gráfica do Minecraft: A falta de um mod para shaders, open source, que me permitia carregar os shaders favoritos nas versões mais novas do jogo, mantendo a performance e compatibilidade com outros mods. O OptiFine, mod dominante de optimização e shaders, tem licenças restritivas, que atrapalham qualquer forma de modificação nele, além de ser conhecido pelas notórias incompatibilidades com alguns mods que jogo. ShadersMod, por exemplo, nunca foi atualizado além da 1.12, e carece de muito dos recursos presentes em outros shaders modernos, além de ser mutualmente incompatível com Sodium, que é, de longe, o melhor mod de otimização de renderização atual. Então, eu criei o Iris para tentar resolver esses problemas, e também diversos outros probelmas de longa data presentes nos Shaders.<br><br> A princípio, desenvolvi o Iris para atender a minha própria necessidade de um mod de shader focado em performance com boa compatibilidade e possibilidade de ajustes. E quando combinado com Sodium, entrega um ótimo desempenho em meu computador, assim, finalmente me possibilitando jogar com shaders, ao invés de apenas usar para screenshots e logo depois desativá-las por conta das quedas de FPS. Claro que, no fim, eu não era a única pessoa que beneficiaria com o essas vantagens trazidas pelo Iris, por isso decidi lançá-lo publicamente como um mod de código aberto.<br><br> O Iris tem uma versão estável e oficial para 1.16, 1.17, e 1.18, e uma beta pública para as Snapshots. O Iris ainda está em desenvolvimento, e frequentemente ganha novas melhorias e otimizações, e está progredindo bem rapidamente!",
        performance: "Performance",
        performanceheading: "Veja como a as vantagens somam ao usar o Iris",
        vanilla: "Apenas o Vanilla",
        vanillamessage:
          "O Minecraft vanilla tem um código muito antigo, e muitos dizem que precisa ser reescrito, especialmente na parte gráfica. A atualização chamada de 'Blaze 3D', vinda com o Minecraft 1.15, foi uma tentativa  de, em parte, melhorar isso, mas no fim acabou mais piorando do que ajudando. Na 1.17, o Minecraft atualizou para OpenGL Core 3.2 e Java 16, mas nada de significante foi feito para utilizar as melhorias trazidas pelas versões mais recente de ambos. Antes da 1.17, o Minecraft também não suportava shaders nativamente, e, mesmo depois de lançado, o seu suporte ainda é muito limitado. Mas o Minecraft é conhecido pelos seus gráficos leves e minimalistas, e também por permitir gráficos baseados em shaders de alta performance.",
        sodium: "Vanilla + <span class='text-span-4'>Sodium</span>",
        sodiummessage:
          "O Sodium é um mod Fabric que reescreve partes do sistema de renderização do Minecraft, otimizando a performance de um jeito que nenhum outro mod jamais fez, além de ser ativamente mantido e atualizado, focando em ser compatível com a maioria dos mods Fabric para maximizar os FPS, mesmo nos mods mais densos e completos. Seus mods irmãos, que são Lithium, Phosphor e Hydrogen, podem ser usados em conjunto com o Sodium para, assim, cada um otimizar diferentes aspectos do jogo, seja nos ciclos do jogo (ticks), iluminação ou memória, respectivamente. Juntos, esses mods podem incrementar os FPS em 150% pra mais comparado ao vanilla, permitindo assim qualquer um aumentar os FPS e estabilidade, seja para obter uma vantagem no PvP, ou que tenha que usá-los como a única maneira de tornar o Minecraft jogável em seu computador.",
        sodiumiris:
          "Vanilla + <span class='text-span-4'>Sodium</span> + <span class='text-span-3'>Iris</span>",
        sodiumirismessage:
          "Iris, quando usado em conjunto com Minecraft Vanilla e Sodium, entrega algo que nenhum outro mod Fabric jamais fez: Dar suporte a shaders. Você pode usar shaders com um framerate surpreendentemente alto (comparado ao OptiFine) sem precisar recorrer para upgrades em seu computador ou gambiarras no jogo Vanilla. E apesar do Iris custar entre 10 a 15% dos frames, graças ao Sodium os FPS continuam similares ou até mesmo maiores que no jogo Vanilla. No futuro, o Iris estará totalmente otimizado, tendo até mesmo as próprias otimizações gráficas (assim como OptiFine), fazendo com que ambos, Sodium e Iris, se agregem ao ponto em que o desempenho deles somados seja maior que usar apenas um, e essas melhorias de desempenho se traduzem diretamente ás Shaders, com a maioria rodando estavelmente acima dos 30fps, mesmo em hardware antigo de 5 ou 6 anos atrás!",
        screenshot: "Galeria de capturas",
        screenshotsubheading: "Veja o que o Iris tem a oferecer",
        screenshot1: "Capturada por Guardian usando SEUS v11",
        screenshot2: "Capturada por Guardian usando Sildurs Extreme VL",
        screenshot3: "Capturada por FoundationGames usando Complementary",
        screenshot4: "Capturada por IMS usando Sildurs Vibrant Extreme VL",
        screenshot5: "Capturada por IMS usando BSL v8",
        screenshot6: "Capturada por IMS usando Complementary v4.0",
        screenshot7: "Capturada por IMS usando Complementary v4.0",
        screenshot8: "Capturada por IMS usando SEUS Renewed",
        screenshot9: "Capturada por IMS usando Complementary v4.0",
        screenshot10: "Capturada por IMS usando Complementary v4.0",
        screenshot11: "Capturada por kinzuu_music usando Complementary v4.0",
        screenshot12: "Capturada por Justsnoopy30 usando Complementary v4.0 BE",
        note: "Detalhe - BE indica capturas que mostram conteúdos do mod BetterEnd de paulevs",
      },
      download: {
        downloadiris: "Baixe agora - Iris",
        heading: "Instalador do Iris",
        subheading: "Desenvolvido para melhorar sua experiência com Iris",
        description:
          "O Instalador irá automaticamente baixar e instalar o Iris, o Fabric Mod Loader, e Sodium, assim trazendo belos gráficos a um desempenho estável. Simplesmente abra o instalador, escolha a sua versão de Minecraft e clique em instalar. Não acredita em nós? Teste!",
        downloadjar: "Baixar .jar universal",
        alternatedownloads: "Outras alternativas",
        alternatedownloadsubheading:
          "Nosso instalador não faz seu estilo? Baixe apenas o mod Iris",
        getmodrinth: "Baixe do Modrinth",
        getcurseforge: "Baixe do CurseForge",
        getgithub: "Pegue o código fonte pelo GitHub",
      },
      common: {
        irisshaders: "Iris Shaders",
        home: "Início",
        about: "Saiba Mais",
        download: "Baixe Agora",
        dark: " Modo Escuro",
        light: " Modo Claro",
        footer1: "Sobre o Projeto Iris",
        footerdesc1:
          "O Projeto Iris é um projeto open source criado por um time de desenvolvedores aficionados em trazer a melhor experiência possível de shaders no Minecraft. Iris é desenvolvido pela comunidade para a comunidade.",
        footer2: "Links úteis",
        curseforge: "Iris no CurseForge",
        modrinth: "Iris no Modrinth",
        github: "GitHub",
        discord: "Discord",
        patreon: "Patreon",
        copyright:
          "© Copyright 2024 IrisShaders. Todos os direitos reservados.",
      },
    },
    ru: {
      index: {
        title: "Это Iris",
        subheading: "Взгляд в новую эру графики Minecraft",
        or: "или",
        continue: "Продолжить чтение",
        heading1: "Почему Iris?",
        subheading1: "То, что отличает Iris",
        card1: "Прекрасная совместимость с модами",
        carddesc1:
          "Iris в первую очередь стремится обеспечить совместимость и уже совместим со многими из ваших любимых модов!",
        card2: "Современный дизайн",
        carddesc2:
          "Iris был разработан с нуля, чтобы быть гибким и легко обновляемым. Попрощайтесь с неделями ожидания поддержки шейдеров в новых версиях Minecraft!",
        card3: "Бесплатный и открытый",
        carddesc3:
          "Iris - это мод с открытым исходным кодом, в который может внести свой вклад любой желающий. Это позволяет Iris улучшаться благодаря содействию сообщества.",
        heading2: "Возможности",
        subheading2: "Что может предложить Iris",
        image1: "Паритет с OptiFine",
        imagedesc1:
          "Iris стремится иметь полную поддержку существовавших и существующих пакетов шейдеров OptiFine, и число шейдеров, поддерживаемых в Iris, стабильно и быстро растёт!<span class='text-span-2'><br>Скриншот от IMS</span>",
        image2: "Работает с Sodium",
        imagedesc2:
          "Iris совместим с модами оптимизации от CaffeineMC, такими как Sodium и Phosphor, обеспечивая потрясающую графику в кадрах, сравнимых с Vanilla, или даже лучше.<br><span class='text-span-2'>Скриншот от IMS</span>",
        heading3: "Преимущества Iris",
        subheading3:
          "Новые методики рендеринга, которые выводят игру на новый уровень",
        shadows: "Тени",
        entities: "Сущности",
        screenshottitle1: "Оптимизированные тени",
        screenshotdesc1:
          "Iris использует технику, называемую Shadow Frustum Culling, чтобы уменьшить воздействие одной из самых больших проблем шейдеров - теней. С использованием Shadow Frustum Culling вы сможете достичь более высокой частоты кадров, не жертвуя качеством объёмного освещения или теней.<br><span class='text-span-2'>Скриншот от IMS, Kappa v5</span>",
        screenshottitle2: "Эффективный рендеринг сущностей",
        screenshotdesc2:
          "Iris улучшает способ визуализации сущностей и блоков-сущностей, таких как сундуки, свиньи и рамки. Этот приём работает даже с отключёнными шейдерами, а в мирах с большим количеством сущностей прирост производительности может составить до 60%. Рендеринг теней особенно сильно улучшается, превращая локации, которые когда-то были неиграбельными с шейдерами, в места, где ваш FPS удивительно плавный!<br><span class='text-span-2'>Скриншот от kinzuu_music</span>",
        stillcurious:
          "Всё ещё интересно? <a href='about.html'>Узнать больше</a><link rel='prefetch' href='/about.html'>.",
      },
      about: {
        abouttitle: "О IrisShaders",
        heading: "Проект Iris",
        subheading: "Узнайте больше о особенностях шейдеров",
        aboutproject: "О проекте",
        messageheading:
          "Обращение от основателя и ведущего разработчика Iris Shaders",
        message:
          "Iris был создан, чтобы заполнить пустоту, которую я видел в сообществе персонализации Minecraft и улучшения графики: отсутствие мода с открытым исходным кодом, который позволил бы мне загружать мои любимые пакеты шейдеров в современных версиях игры, сохраняя при этом производительность и совместимость с модпаками. OptiFine, пока что доминирующий мод для загрузки пакетов шейдеров, имеет ограниченное лицензирование, которое твёрдо препятствует любому вмешательству, и довольно печально известен своими проблемами совместимости с модами, которые мне нравятся. Он также несовместим с Sodium, лучшим из существующих модов оптимизации рендеринга. ShadersMod вообще не обновлялся после 1.12, в нём недостаточно поддержки для многих современных популярных шейдеров. Поэтому я создал Iris, чтобы попытаться решить как эти, так и многие другие давние проблемы с пакетами шейдеров.<br><br>В первую очередь я разрабатываю Iris для удовлетворения моей собственной потребности в моде шейдеров, ориентированном на производительность, с хорошей совместимостью и потенциалом для совершенствования. Iris в паре с модом Sodium обеспечивает отличную производительность на моём ПК, наконец, позволяя мне полностью играть с шейдерами, а не просто периодически включать их, чтобы делать красивые скриншоты, а затем выключать, как только я устану от падений кадров. Конечно, как оказалось, я далеко не единственный человек, которому будет полезна разработка Iris, поэтому я решил выпустить его для широкой публики как мод с открытым исходным кодом.<br><br>Iris имеет общедоступные стабильные релизы для Minecraft 1.16.5 и выше, но всё ещё активно разрабатывается, часто получает новые улучшения и развивается очень быстро!",
        performance: "Производительность",
        performanceheading: "Смотрите, как кадры складываются с Iris",
        vanilla: "Только Vanilla",
        vanillamessage:
          "Ванильный Minecraft имеет очень старую кодовую базу, и многое говорит, что он остро нуждается в переписывании, особенно когда речь заходит о графике. Движок Blaze 3D, добавленный в 1.15, был попыткой несколько облегчить эту проблему, но во многих отношениях только усугубил её. В 1.17 Minecraft перешёл на OpenGL Core 3.2 и Java 16, но всё ещё не было реализовано никаких существенных изменений, которые бы использовали улучшения производительности этих систем. Minecraft до 1.17 не имел нативной поддержки шейдеров, и даже с выходом 1.17 возможности шейдеров пока остаются сильно ограниченными. Тем не менее, Minecraft известен своей минималистичной графикой с низкими требованиями, что обеспечивает прочную основу для высокопроизводительной шейдерной графики.",
        sodium: "Vanilla + <span class='text-span-4'>Sodium</span>",
        sodiummessage:
          "Sodium – это мод для Fabric, который переписывает части ванильной системы рендеринга для повышения производительности так эффективно, как ни один другой мод до него. Sodium активно поддерживается и обновляется, стремясь быть совместимым с большинством других модов Fabric ради максимального FPS даже в огромных сборках. Его родственные моды – Lithium, Phosphor и Hydrogen – могут использоваться в сочетании с Sodium для оптимизации различных аспектов игры, таких как серверные вычисления, освещение или использование памяти соответственно. Вместе все эти моды могут поднять ваш FPS на 150% и более в сравнении с производительностью ванильного Minecraft для каждого игрока, независимо от того, стремитесь ли вы максимально повысить частоту кадров ради преимущества в PvP, или это единственный способ сделать Minecraft играбельным на вашем устройстве.",
        sodiumiris:
          "Vanilla + <span class='text-span-4'>Sodium</span> + <span class='text-span-5'>Iris</span>",
        sodiumirismessage:
          "Iris основывается как на Sodium, так и на Vanilla, предоставляя то, чего не было ни в одном другом моде для Fabric – поддержку уже существующих шейдеров. А из-за того, что Iris сочетается с Sodium и Vanilla, вы можете получить шейдеры с замечательной частотой кадров, без необходимости в дорогостоящем оборудовании или экспериментальных модификациях игры. Дополнительные процессы, которые Iris выполняет, снижают производительность рендеринга лишь на 10-15%, но с установленным Sodium  производительность останется намного выше ванильной. В будущем Iris станет полностью комплексным и модернизированным, и даже будет иметь собственные решения в оптимизации рендеринга, позволяя Sodium и Iris работать совместно даже лучше, чем каждый из них по отдельности. И это улучшение производительности влияет непосредственно на шейдеры. При этом, большинство популярных шейдеров стабильно выдаёт 60 fps и больше, даже на оборудовании 5 и 6-летней давности!",
        screenshot: "Галерея скриншотов",
        screenshotsubheading: "Посмотрите, что может предложить Iris",
        screenshot1: "Снято Guardian с использованием SEUS v11",
        screenshot2: "Снято Guardian с использованием Sildurs Extreme VL",
        screenshot3: "Снято FoundationGames с использованием Complementary",
        screenshot4: "Снято IMS с использованием Sildurs Vibrant Extreme VL",
        screenshot5: "Снято IMS с использованием BSL v8",
        screenshot6: "Снято IMS с использованием Complementary v4.0",
        screenshot7: "Снято IMS с использованием Complementary v4.0",
        screenshot8: "Снято IMS с использованием SEUS Renewed",
        screenshot9: "Снято IMS с использованием Complementary v4.0",
        screenshot10: "Снято IMS с использованием Complementary v4.0",
        screenshot11: "Снято kinzuu_music с использованием Complementary v4.0",
        screenshot12:
          "Снято Justsnoopy30 с использованием Complementary v4.0 BE",
        note: "Примечание – BE обозначены скриншоты, которые демонстрируют контент из мода BetterEnd от paulevs",
      },
      download: {
        downloadiris: "Скачать - IrisShaders",
        heading: "Установщик Iris",
        subheading: "Создан, чтобы упростить ваш опыт работы с Iris",
        description:
          'Установщик Iris автоматически загрузит и установит Iris и Sodium для лучшей графики при плавной частоте кадров. Просто запустите установщик, выберите версию и нажмите "Install". Не верится? Попробуйте сами!',
        downloadjar: "Скачать универсальный JAR",
        alternatedownloads: "Альтернативная загрузка",
        alternatedownloadsubheading:
          "Наш удобный установщик не в вашем стиле? Попробуйте автономную версию",
        getmodrinth: "Загрузить с Modrinth",
        getcurseforge: "Загрузить с CurseForge",
        getgithub: "Получить исходный код на GitHub",
      },
      common: {
        irisshaders: "Iris Shaders",
        home: "Домой",
        about: "Узнать больше",
        download: "Скачать",
        dark: " Ночной режим",
        light: " Дневной режим",
        footer1: "О проекте Iris",
        footerdesc1:
          "Проект Iris - это совместный проект с открытым исходным кодом, созданный командой страстных разработчиков, стремящихся сделать использование шейдеров в Minecraft максимально эффективным. Iris разрабатывается сообществом, для сообщества.",
        footer2: "Полезные ссылки",
        curseforge: "Iris на CurseForge",
        modrinth: "Iris на Modrinth",
        github: "GitHub",
        discord: "Discord",
        patreon: "Patreon",
        copyright: "© Copyright 2024 IrisShaders. Все права защищены.",
      },
    },
    sv: {
      index: {
        title: "Detta är Iris",
        subheading: "En lins till en ny era av minecraft grafik",
        or: "eller",
        continue: "Fortsätt läsa",
        heading1: "Varför Iris?",
        subheading1: "Detta är vad som gör iris annorlunda",
        card1: "Bra mod kompatibilitet",
        carddesc1:
          "Iris jobbar hårt för att säkerställa mod kompatibilitet som en första prioritet, och är redan kompatibelt med många av dina favorit mods!",
        card2: "Modern Design",
        carddesc2:
          "Iris har byggts från grunden för att vara adaptivt och lätt att uppdatera. Säg hejdå till att vänta i veckor för att använda shaders med den nya Minecraft versionen!",
        card3: "Fri och Öppen Källkod",
        carddesc3:
          "Iris är ett mod med öppen källkod som vem som helst kan bidra till. Detta gör att Iris kan förbättras genom samarbete.",
        heading2: "Funktioner",
        subheading2: "Det Iris har att erbjuda",
        image1: "Paritet med OptiFine",
        imagedesc1:
          "Målet är att Iris ska vara kompatibelt med tidigare och nuvarande OptiFine shader-paket, och antalet paket som stödjs av Iris ökar snabbt och stadigt!<span class='text-span-2'><br>Skärmbild av Niko</span>",
        image2: "Fungerar med Sodium",
        imagedesc2:
          "Iris är kompatibelt med CaffeineMC optimiserings mods så som Sodium och Phosphor, vilket möjliggör fantastisk grafik med frame rates likt eller till och med högre än vanilla.<br><span class='text-span-2'>Skärmbild av Guardian</span>",
        heading3: "Fördelen med Iris",
        subheading3: "Nya renderings tekniker som ställer dig i framkant",
        shadows: "Skuggor",
        entities: "Entities",
        screenshottitle1: "Prestanda-Optimerade Skuggor",
        screenshotdesc1:
          "Iris använder en teknik som kallas Shadow Frustum Culling för att minimera kostnaden av en av de mest krävan aspekterna av en shader - skuggorna. Genom att använda Iris shadow frustum culling så kommer du kunna nå högre frame rates utan att att offra kvaliteten på volumetriskt ljus eller skuggor.<br><span class='text-span-2'>Skärmbild av FoundationGames</span>",
        screenshottitle2: "Effektiv Entity Rendering",
        screenshotdesc2:
          "Iris förbättrar sättet som Minecraft renderar entities och block entities som kistor, grisar, och föremålsramar. Detta funkar även med shaders inaktiverade, och i världar med många entities så kan det öka prestandan med upp till 60 procent jämfört med vanilla. Rendering av skuggor får en särskild förbättring vilket gör att områden som tidigare var ospelbara med shaders numera ger en förvånansvärt hög FPS!<br><span class='text-span-2'>Skärmbild av kinzuu_music</span>",
        stillcurious:
          "Fortfarande nyfiken? <a href='about.html'>Läs vidare</a><link rel='prefetch' href='/about.html'>.",
      },
      about: {
        abouttitle: "Om IrisShaders",
        heading: "Iris-projektet",
        subheading: "Lär dig mer om Shader Sensationen",
        aboutproject: "Om projektet",
        messageheading:
          "Ett meddelande från grundaren och den ledande utvecklaren hos Iris Shaders",
        message:
          "Iris utvecklades för att fylla ett hål jag såg i communityn för grafisk förbättring och anpassning i Minecraft: bristen av ett shaders mod med öppen källkod som låter mig använda mina favorit shader-paket med moderna versioner av spelet, medans det behåller prestanda och kompatibilitet med modpacks. OptiFine, det nuvarande dominanta modet för att använda shader-paket, har en restriktiv licens som står bestämt står i vägen för någon sorts mekande, och är relativt ökänt för att inte vara kompatibelt med mods som jag gillar. Det är också helt inkompatibelt med Sodium, det bästa renderings-optimerings mod som finns just nu med stor marginal. ShadersMod uppdaterades aldrig efter 1.12, och saknar stöd för många av de moderna och populära shader-paketen. Så jag skapade Iris, för att försöka lösa dess problem, och för att addressera flera andra långvariga problem med shader-paket.<br><br>Först och främst utvecklade jag Iris för att tillgodose mina egna behov av ett prestandaorienterat shader mod med god kompatibilitet och potential för mekande. Iris tillsammans med Sodium levererar lysande prestanda på min masking, vilket äntligen gör det möjligt för mig att faktiskt spela med shaders, istället för att bara aktivera dem för fina skärmbilder för att sedan inaktivera dem när jag blir trött på frame drops. Som det visar sig så är jag långt ifrån den enda som har nytta av utvecklingen av Iris, det är därför jag bestämt mig för att släppa Iris som et mod med öppen källkod<br><br>Iris har har en offentlig och stabil version för 1.16 som funkar med en anpassad version av Sodium, samt en offentlig betaversion för 1.17 som just nu inte funkar med Sodium (just nu finns ingen officiell version av Sodium för 1.17). Iris är fortfarande under kraftig utveckling, nya förbättringar kommer varje vecka och det utvecklas snabbt!",
        performance: "Prestanda",
        performanceheading: "Se hur din FPS ökar med Iris",
        vanilla: "Endast Vanilla",
        vanillamessage:
          "Vanilla Minecraft har en väldigt gammal kodbas, och många säger att den verkligen skulle behöva skrivas om, särskilt när det kommer till grafik. Blaze 3D rendering, tillagt i 1.15, var ett försök att lindra detta något, men på många sätt gjorde det bara problemet värre. I 1.17 så flyttat Minecraft till OpenGL Core 3.2 samt Java 16, men än så länge har inga betydande ändringar implementerats för att utnyttja prestandaökningen av dessa system. Minecraft före 1.17 hade inte inbyggt stöd för shader, och även efter 1.17 så är stödet väldigt begränsat. Minecraft är dock känt för sin minimalistiska grafik, och har en stark grund för shaderbaserad grafik med hög prestanda.",
        sodium: "Vanilla + <span class='text-span-4'>Sodium</span>",
        sodiummessage:
          "Sodium är ett fabric mod som skriver om delar av det ursprungliga renderingssystemet för att optimera prestanda på ett sätt som inget annat mod gjort förut. Sodium underhålls och uppdateras aktivt, och har som mål att vara kompatibelt med de flesta andra Fabric mods för maximal FPS i även de mest packade mod-paket. Dess syskonmod, Lithium, Phosphor, och Hydrogen, kan användar vid sidan om Sodium för att optimera olika aspekter av spelet, så som ticking, belysning, respektive minne. Tillsamans kan dessa mods öka FPS med 150% eller mer över vanillas prestanda för vilken spelare som helst, oavsett om du siktar på att ha så hög FPS som möjligt eller om dessa mods är det enda som gör att du kan spela med den hårdvara du har tillgänglig.",
        sodiumiris:
          "Vanilla + <span class='text-span-4'>Sodium</span> + <span class='text-span-3'>Iris</span>",
        sodiumirismessage:
          "Iris bygger på både Sodium samt Vanilla för att erbjuda något som inget annat fristående fabric mod gjort förut: stöd för befintliga existerande shaders. Och eftersom Iris jobbar tillsammans med Sodium och Vanilla så kan du få shaders med utmärkta frame rates, utan att behöva dyr hårdvara eller experimentella spelmodifikationer. De extra processer som iris utför minskar endast prestandan med 10 till 15 procent, och med Sodium installerat så ligger prestandanr väl över vanilla. I framtiden så kommer Iris vara fullt integrerat, och kommer till och med bidra med egen renderingsoptimering, så att Iris och Sodium kan jobba tillsammans för att vara bättre än vad de kan vara var för sig. Och dessa prestandaförbättringar överförs direkt till shaders, då de flesta populära shaders kör vid eller över 60 fps, även på hårdvara som är 5 eller 6 år gammal!",
        screenshot: "Skärmbildsgalleri",
        screenshotsubheading: "Se vad iris kan erbjuda",
        screenshot1: "Bild av Guardian med SEUS v11",
        screenshot2: "Bild av Guardian med Sildurs Extreme VL",
        screenshot3: "Bild av FoundationGames med Complementary",
        screenshot4: "Bild av IMS med Sildurs Vibrant Extreme VL",
        screenshot5: "Bild av IMS med BSL v8",
        screenshot6: "Bild av IMS med Complementary v4.0",
        screenshot7: "Bild av IMS med Complementary v4.0",
        screenshot8: "Bild av IMS med SEUS Renewed",
        screenshot9: "Bild av IMS med Complementary v4.0",
        screenshot10: "Bild av IMS med Complementary v4.0",
        screenshot11: "Bild av kinzuu_music med Complementary v4.0",
        screenshot12: "Bild av Justsnoopy30 med Complementary v4.0 BE",
        note: "Notera - BE indikerar skärmbilder med innehåll från BetterEnd modet av paulevs",
      },
      download: {
        downloadiris: "Ladda ner Nu - IrisShaders",
        heading: "Irisinstalleraren",
        subheading: "designad för att underlätta din Iris-upplevelse",
        description:
          "Irisinstalleraren kommer automatisk ladda ner och installera Iris och Sodium för fantastisk grafik med jämn frame rate. Kör helt enkelt installeraren, välj din version, och klicka installera. Tror du inte oss? Testa själv.",
        downloadjar: "Ladda ner Universal JAR",
        alternatedownloads: "Alternativa Nerladdningar",
        alternatedownloadsubheading:
          "Är vår användbara installerar inte din stil? Testa den fristående versionen",
        getmodrinth: "Ladda ner från Modrinth",
        getcurseforge: "Ladda ner från CurseForge",
        getgithub: "Få källkoden från GitHub",
      },
      common: {
        irisshaders: "Iris Shaders",
        home: "Hem",
        about: "Läs Mer",
        download: "Ladda ner Nu",
        dark: " Mörkt läge",
        light: " Ljust läge",
        footer1: "Om Irisprojektet",
        footerdesc1:
          "Irisprojeket är ett sammarbetsfokuserat öppet projekt skapat av ett team av passionerade utvecklare som försöker göra Minecraft shaders upplevelsen så bra som den kan bli. Iris utvecklas av communityn, för communityn.",
        footer2: "Användbara länkar",
        curseforge: "Iris på CurseForge",
        modrinth: "Iris på Modrinth",
        github: "GitHub",
        discord: "Discord",
        patreon: "Patreon",
        copyright: "© Copyright 2024. Licensed under the LGPLv3.",
      },
    },
    zh_Hans: {
      index: {
        title: "这就是 Iris",
        subheading: "打开次世代 Minecraft 光影的大门",
        or: "或者",
        continue: "继续阅读",
        heading1: "为什么选择 Iris 光影？",
        subheading1: "Iris 因为这些特点而与众不同",
        card1: "出众的兼容性",
        carddesc1:
          "Iris 致力于确保模组的兼容性作为第一优先级，并且已经与许多你最喜欢的模组兼容！",
        card2: "现代化的设计",
        carddesc2:
          "Iris 是从零开始编写的，可扩展且易于更新，这让我们可以很快的为最新版本的 Minecraft 提供支持！",
        card3: "自由且开源",
        carddesc3: "Iris 是开源的 - 也就是任何人都可以参与 Iris 的开发！",
        heading2: "特色",
        subheading2: "Iris 可以为你带来...",
        image1: "OptiFine 的光影",
        imagedesc1:
          "Iris 的目标是全面支持所有的 OptiFine 光影包, 同时 Iris 支持的光影数量正在不断的快速增长！<span class='text-span-2'><br>截图来自 Niko</span>",
        image2: "Sodium 的优化",
        imagedesc2:
          "Iris 兼容 CaffeineMC 系列的性能优化模组譬如 Sodium 和 Phosphor，这意味着在体验惊人的图形的同时你可以获得比原版更高的帧率！<br><span class='text-span-2'>截图来自 Guardian</span>",
        heading3: "Iris 的优势",
        subheading3: "全新的渲染技术，让你的游戏观感焕然一新",
        shadows: "阴影",
        entities: "实体",
        screenshottitle1: "基于性能优化的阴影",
        screenshotdesc1:
          "Iris 使用一种叫做阴影截锥剔除的技术来减少阴影对帧率的影响，阴影是光影最大的性能消耗。使用 Iris 的阴影截锥剔除，你将能够达到更高的帧率，而不牺牲体积光照或阴影的质量。<br><span class='text-span-2'>截图来自 FoundationGames</span>",
        screenshottitle2: "高效的实体渲染技术",
        screenshotdesc2:
          "Iris 改进了 Minecraft 渲染实体和方块实体的方式，如箱子，猪，和物品展示框。这个技术甚至可以在禁用光影的情况下工作，在有很多实体的世界中，Iris 可以提供高于原版60%的性能提升。阴影渲染有了很大的改进，你可以在原本无法使用光影的地方获得很高的帧率！<br><span class='text-span-2'>截图来自 kinzuu_music</span>",
        stillcurious:
          "还是很好奇？<a href='about.html'>了解更多</a><link rel='prefetch' href='/about.html'>.",
      },
      about: {
        abouttitle: "关于 Iris 光影",
        subheading: "了解更多关于 Iris 的信息",
        aboutproject: "关于本项目",
        messageheading: "首席开发人员致辞",
        message:
          "Iris 的创建是为了填补我在 Minecraft 中看到的空白：这个社区缺少一个能够提供高模组兼容性和高性能的开源光影模组。OptiFine 是目前用于加载光影的主流模组。但是 OptiFine 不仅闭源，而且其许可极其的严格。这对任何对 OptiFine 的研究和修改都是极其不利的。不仅如此，OptiFine 还因为其与我喜欢的模组存在兼容性问题而臭名昭著。不仅如此 OptiFine 也和Sodium（一个比 OptiFine 强大得多的开源性能提升模组）不兼容。而另一个选择，ShadersMod，在 1.12 以后就从未更新过，而且它缺乏对许多现代光影包的支持。所以我创建了 Iris，试图解决这些问题，和解决许多其他的光影包的长期问题。<br><br>Iris 一开始只是想要满足我自己对光影模组的需求。 Iris 和 Sodium 在我的机器上展现了出色的性能，最终让我能够在日常游戏时使用光影，而不只是偶尔打开它们来拍摄漂亮的截图。当然，事实证明，我自己远不是受 Iris 之益的唯一之人，这就是为什么我决定开源这个模组并分享给整个 Minecraft 社区。<br><br>Iris 有一个用于 1.16 的稳定版本，可以和一个 Iris 专用版的 Sodium 一起使用。我们还有一个用于 1.17 的 Beta 版本，目前还不能和 Sodium 一起使用（目前，还没有针对 1.17 的 Sodium 官方版本）。Iris 仍然在被快速的开发中，所以今天就尝试一下这个全新版本的光影模组吧！",
        performance: "性能提升",
        performanceheading: "Iris 提供的游戏性能提升",
        vanilla: "原版",
        vanillamessage:
          "Minecraft 有一个非常古老的代码库，许多人都说 Mojang 应该尽快重写它（特别是图像的代码）。在 1.15 中添加的 Blaze 3D 渲染试图在某种程度上缓解这个问题，但在很多方面只会使问题恶化。在 1.17 中，Minecraft 正在向 OpenGL Core 3.2 和 Java 16 移动，但到目前为止，还没有实现利用这些系统的性能增强的显著变化。在 1.17 之前的 Minecraft 也不支持着色器，即使在 1.17 发布后，着色器的支持也是非常有限的。然而，Minecraft 以其低开销的极简图形而闻名，并为高性能的基于着色器的图形提供了强大的基础。",
        sodium: "原版 + <span class='text-span-4'>Sodium</span>",
        sodiummessage:
          "Sodium 是一个 Fabric 模组，通过重写其他模组都没有优化的原版渲染系统的部分代码来提升游戏性能。Sodium 在积极维护和更新，并旨在与大多数其他 Fabric 模组兼容并提升帧率，即便是庞大的模组包也是如此。它的同类模组 Lithium，Phosphor 和 Hydrogen，都可以与 Sodium 一起使用，从而在逻辑，照明，和内存方面大幅优化 Minecraft。这些模组相互配合可以提高 150% 的帧率。所以无论你是希望让高帧率给你带来最大的 PvP 优势还是只是希望在你的办公本上玩 Minecraft，Sodium 都是你的不二之选。",
        sodiumiris:
          "原版 + <span class='text-span-4'>Sodium</span> + <span class='text-span-3'>Iris 光影</span>",
        sodiumirismessage:
          "Iris 构建在 Sodium 和原生 Minecraft 之上。由于于 Iris 可以和 Sodium 一起使用，即使没有昂贵的硬件，你也依然可以在享受次世代光影特效的同时获得惊人的帧率。虽然需要进行极其复杂的光影处理和计算，但 Iris 只会消耗 10 - 15% 的性能。与 Sodium 配合使用更会让你得到比原版更高的帧率。在未来，Iris 甚至会集成自己的优化系统，让五六年以前购买的电脑即使在不使用额外的优化模组的前提下依然可以在 60 帧以上流畅的运行复杂的光影。",
        screenshot: "截图",
        screenshotsubheading: "看看 Iris 可以为你带来什么",
        screenshot1: "截图来自 Guardian ，使用 SEUS v11",
        screenshot2: "截图来自 Guardian ，使用 Sildurs Extreme VL",
        screenshot3: "截图来自 FoundationGames ，使用 Complementary",
        screenshot4: "截图来自 IMS ，使用 Sildurs Vibrant Extreme VL",
        screenshot5: "截图来自 IMS ，使用 BSL v8",
        screenshot6: "截图来自 IMS ，使用 Complementary v4.0",
        screenshot7: "截图来自 IMS ，使用 Complementary v4.0",
        screenshot8: "截图来自 IMS ，使用 SEUS Renewed",
        screenshot9: "截图来自 IMS ，使用 Complementary v4.0",
        screenshot10: "截图来自 IMS ，使用 Complementary v4.0",
        screenshot11: "截图来自 kinzuu_music ，使用 Complementary v4.0",
        screenshot12: "截图来自 Justsnoopy30 ，使用 Complementary v4.0 BE",
        note: "注意 - BE 代表了截图中包含了 paulevs 的 BetterEnd 模组",
      },
      download: {
        downloadiris: "下载 Iris - IrisShaders",
        heading: "Iris 光影安装程序",
        subheading: "一键安装，立即体验",
        description:
          "Iris 安装包会自动下载并安装 Iris 和 Sodium。只需要选择版本和路径，就可以一键安装 Iris 和 Sodium 到你的游戏中。",
        downloadjar: "下载 JAR",
        alternatedownloads: "下载 JAR 手动安装",
        alternatedownloadsubheading:
          "不喜欢我们的一键安装程序？没关系，你也可以手动安装 Iris。",
        getmodrinth: "从 Modrinth 下载",
        getcurseforge: "从 CurseForge 下载",
        getgithub: "从 GitHub 获取源代码",
      },
      common: {
        irisshaders: "Iris 光影",
        home: "首页",
        about: "了解更多",
        download: "立即下载",
        dark: " 暗色模式",
        light: " 亮色模式",
        footer1: "关于 Iris 光影",
        footerdesc1:
          "Iris Project 是一个协作开源项目，由一个充满激情的开发团队创建，旨在提升 Minecraft 的光影体验。Iris 是由社区开发的，也是为社区服务的。",
        footer2: "相关链接",
        curseforge: "CurseForge 上的 Iris",
        modrinth: "Modrinth 上的 Iris",
        github: "GitHub",
        discord: "Discord",
        patreon: "Patreon",
        copyright: "© 版权所有 2024 IrisShaders. 保留所有权利",
      },
    },

    ar: {
      index: {
        title: "هذه هي إيريس",
        subheading: "نافذة إلى عصر جديد من رسومات ماينكرافت",
        or: "أو",
        continue: "متابعة القراءة",
        heading1: "لماذا إيريس؟",
        subheading1: "هذا ما يميز إيريس",
        card1: "توافق رائع مع التعديلات",
        carddesc1:
          "تلتزم إيريس بضمان التوافق مع التعديلات كأولوية أولى، وهي متوافقة بالفعل مع العديد من تعديلاتك المفضلة!",
        card2: "تصميم حديث",
        carddesc2:
          "تم بناء إيريس من الألف إلى الياء لتكون قابلة للتوسيع وسهلة التحديث. قل وداعًا لأسابيع من الانتظار لاستخدام الشادرز في إصدار ماينكرافت الجديد!",
        card3: "مجانية ومفتوحة المصدر",
        carddesc3:
          "إيريس هي تعديل مفتوح المصدر يمكن لأي شخص المساهمة فيه. وهذا يسمح بتحسين إيريس من خلال تسهيل التعاون.",
        heading2: "المميزات",
        subheading2: "ما تقدمه إيريس",
        image1: "توافق مع OptiFine",
        imagedesc1:
          "تهدف إيريس إلى دعم كامل لجميع حزم الشادرز القديمة والحالية من OptiFine، وعدد الحزم المدعومة من إيريس في تزايد مستمر وسريع!<span class='text-span-2'><br>لقطة شاشة بواسطة IMS، Kappa v5</span>",
        image2: "تعمل مع Sodium",
        imagedesc2:
          "إيريس متوافقة مع تعديلات تحسين CaffeineMC مثل Sodium وPhosphor، مما يتيح رسومات مذهلة بمعدلات إطارات مشابهة أو حتى أفضل من الفانيلا.<br><span class='text-span-2'>لقطة شاشة بواسطة IMS، Nostalgia v4</span>",
        heading3: "ميزة إيريس",
        subheading3: "تقنيات عرض جديدة تضعك في مقدمة اللعبة",
        shadows: "الظلال",
        entities: "الكيانات",
        screenshottitle1: "ظلال محسّنة للأداء",
        screenshotdesc1:
          "تستخدم إيريس تقنية تسمى Shadow Frustum Culling لتقليل العبء الزائد لأحد أكبر مستنزفي الأداء في الشادر - الظلال. باستخدام تقنية إيريس لخفض الظلال، ستتمكن من الوصول إلى معدلات إطارات أعلى دون التضحية بجودة الإضاءة الحجمية أو الظلال.<br><span class='text-span-2'>لقطة شاشة بواسطة IMS، Kappa v5</span>",
        screenshottitle2: "عرض فعال للكيانات",
        screenshotdesc2:
          "تحسن إيريس الطريقة التي يعرض بها ماينكرافت الكيانات وكيانات الكتل مثل الصناديق، والخنازير، وإطارات العناصر. تعمل هذه الحيلة حتى عند تعطيل الشادرز، وفي العوالم التي تحتوي على الكثير من الكيانات، يمكنها تعزيز أداء الفانيلا بنسبة تصل إلى 60 في المائة. يشهد عرض الظلال تحسنًا كبيرًا، مما يجعل المناطق التي كانت غير قابلة للعب مع الشادرز إلى أماكن يكون فيها FPS سلسًا بشكل مدهش!<br><span class='text-span-2'>لقطة شاشة بواسطة kinzuu_music</span>",
        stillcurious:
          "ما زلت فضوليًا؟ <a href='about.html'>تعرف على المزيد</a><link rel='prefetch' href='/about.html'>.",
      },
      about: {
        abouttitle: "عن IrisShaders",
        heading: "مشروع إيريس",
        subheading: "تعرف على المزيد حول إحساس الشادرز",
        aboutproject: "عن المشروع",
        messageheading: "رسالة من المؤسس والمطور الرئيسي في Iris Shaders",
        message:
          "تم إنشاء إيريس لسد الفراغ الذي رأيته في مجتمع تخصيص ماينكرافت وتعزيز الرسومات: نقص تعديل شادرز مفتوح المصدر الذي يسمح لي بتحميل حزم الشادرز المفضلة لدي على إصدارات حديثة من اللعبة، مع الاحتفاظ بالأداء والتوافق مع حزم التعديلات. OptiFine، التعديل المسيطر حاليًا لتحميل حزم الشادرز، يحتوي على ترخيص مقيد يعترض بشدة أي نوع من التلاعب، وهو معروف بشكل عام بمشاكل التوافق مع التعديلات التي أحبها. كما أنه غير متوافق مع Sodium، أفضل تعديل لتحسين العرض على الإطلاق بفارق كبير. لم يتم تحديث ShadersMod إلى ما بعد 1.12، ويفتقر إلى دعم العديد من حزم الشادرز الحديثة والشائعة. لذا قمت بإنشاء إيريس، في محاولة لحل هذه المشكلات، وأيضًا لمعالجة العديد من المشكلات القديمة مع حزم الشادرز.<br><br>أطور إيريس في المقام الأول لتلبية احتياجاتي الخاصة من تعديل شادرز موجه نحو الأداء مع توافق جيد وإمكانية التعديل. يقدم إيريس عند إقرانه بـ Sodium أداءً رائعًا على جهازي، مما يجعل من الممكن أخيرًا لي اللعب مع الشادرز بدلاً من مجرد تشغيلها بشكل دوري لالتقاط لقطات شاشة جميلة، ثم إيقاف تشغيلها بمجرد أن أتعب من انخفاض الإطارات. بالطبع، كما تبين، أنا لست الشخص الوحيد الذي يستفيد من تطوير إيريس، ولهذا السبب قررت إصداره للجمهور كتعديل مفتوح المصدر.<br><br>إيريس لديه إصدار عام مستقر لـ 1.18.2، 1.19.2، و1.19.3، بالإضافة إلى إصدار تجريبي عام للنسخ المستقبلية. لا يزال إيريس في تطوير نشط ويتلقى تحسينات جديدة بشكل متكرر، ويتقدم بسرعة كبيرة!",
        performance: "الأداء",
        performanceheading: "شاهد كيف تتراكم الإطارات مع إيريس",
        vanilla: "فقط الفانيلا",
        vanillamessage:
          "الإصدار الحالي من ماينكرافت يحتوي على قاعدة شفرات قديمة جدًا، ويقول الكثيرون إنه بحاجة ماسة إلى إعادة كتابة، خاصة عندما يتعلق الأمر بالرسومات. كان Blaze 3D rendering، المضاف في 1.15، محاولة للتخفيف من ذلك إلى حد ما، ولكنه في العديد من النواحي زاد المشكلة سوءًا. في 1.17، تنتقل ماينكرافت إلى OpenGL Core 3.2 و Java 16، ولكن حتى الآن لم يتم تنفيذ أي تغييرات كبيرة تستفيد من تحسينات الأداء لهذه الأنظمة. لم تدعم ماينكرافت قبل 1.17 الشادرز بشكل أصلي، وحتى منذ إصدار 1.17، فإن دعم الشادرز محدود جدًا. ومع ذلك، فإن ماينكرافت معروفة برسوماتها البسيطة ذات العبء المنخفض، وتوفر أساسًا قويًا للرسومات عالية الأداء المستندة إلى الشادرز.",
        sodium: "فانيلا + <span class='text-span-4'>Sodium</span>",
        sodiummessage:
          "Sodium هو تعديل على Fabric يعيد كتابة أجزاء من نظام العرض في الفانيلا لتحسين الأداء بطريقة لم يقم بها أي تعديل آخر من قبل. يتم صيانة Sodium بنشاط وتحديثه، ويهدف إلى أن يكون متوافقًا مع معظم تعديلات Fabric الأخرى لتحقيق أقصى FPS حتى في أكبر حزم التعديلات. يمكن استخدام تعديلاته الشقيقة، Lithium، Phosphor، وHydrogen، معًا لتحسين جانب مختلف من اللعبة، سواء كان ذلك في التوقيت، الإضاءة، أو الذاكرة على التوالي. يمكن أن تعزز هذه التعديلات FPS إلى 150٪ أو أكثر من أداء الفانيلا لأي لاعب هناك، سواء كنت تستهدف أقصى إطارات لتمنحك الحافة في PvP، أو كانت Sodium والتعديلات المماثلة هي الوحيدة التي يمكنها جعل اللعبة قابلة للعب على الأجهزة التي لديك.",
        sodiumiris:
          "فانيلا + <span class='text-span-4'>Sodium</span> + <span class='text-span-5'>Iris</span>",
        sodiumirismessage:
          "يبني إيريس على كل من Sodium و Vanilla من خلال تقديم شيء لم يكن لدى أي تعديل مستقل على Fabric من قبل: دعم الشادرز المخصصة الحالية. وبسبب تكامل إيريس مع Sodium و Vanilla، يمكنك الحصول على شادرز بمعدلات إطارات مذهلة، دون الحاجة إلى أجهزة باهظة الثمن أو تعديلات تجريبية على اللعبة. تقلل العمليات الإضافية التي يقوم بها إيريس من الأداء بنسبة 10-15 في المائة فقط، ومع تثبيت Sodium يبقى الأداء أعلى بكثير من أداء الفانيلا! ينتقل هذا مباشرة إلى الشادرز، مع تشغيل معظم الشادرز الشهيرة باستمرار بمعدل 60 إطارًا في الثانية أو أعلى، حتى على الأجهزة التي يبلغ عمرها 5 و 6 سنوات!",
        screenshot: "معرض اللقطات",
        screenshotsubheading: "شاهد ما تقدمه إيريس",
        screenshot1: "تم التقاطه بواسطة Guardian باستخدام SEUS v11",
        screenshot2: "تم التقاطه بواسطة Guardian باستخدام Sildurs Extreme VL",
        screenshot3: "تم التقاطه بواسطة FoundationGames باستخدام",
        screenshot7: "تم التقاطها بواسطة IMS باستخدام Complementary v4.0",
        screenshot8: "تم التقاطها بواسطة IMS باستخدام SEUS Renewed",
        screenshot9: "تم التقاطها بواسطة IMS باستخدام Complementary v4.0",
        screenshot10: "تم التقاطها بواسطة IMS باستخدام Complementary v4.0",
        screenshot11:
          "تم التقاطها بواسطة kinzuu_music باستخدام Complementary v4.0",
        screenshot12:
          "تم التقاطها بواسطة Justsnoopy30 باستخدام Complementary v4.0 BE",
        note: "ملاحظة - BE تشير إلى لقطات الشاشة التي تحتوي على محتوى من تعديل BetterEnd بواسطة paulevs.",
      },
      download: {
        downloadiris: "تنزيل الآن - IrisShaders",
        heading: "مثبت Iris",
        subheading: "مصمم لتبسيط تجربتك مع Iris",
        description:
          "سيقوم مثبت Iris بتنزيل وتثبيت Iris وSodium تلقائيًا للحصول على رسومات رائعة بمعدلات إطارات سلسة. ببساطة قم بتشغيل المثبت، اختر الإصدار الخاص بك، واضغط على تثبيت. لا تصدقنا؟ جربها بنفسك!",
        downloadjar: "تنزيل JAR عالمي",
        alternatedownloads: "تنزيلات بديلة",
        alternatedownloadsubheading:
          "مثبتنا المريح ليس على ذوقك؟ جرب النسخة المستقلة",
        getmodrinth: "تنزيل من Modrinth",
        getcurseforge: "تنزيل من CurseForge",
        getgithub: "الحصول على المصدر من GitHub",
      },
      common: {
        irisshaders: "Iris Shaders",
        home: "الرئيسية",
        about: "تعرف على المزيد",
        download: "تنزيل الآن",
        dark: "الوضع الداكن",
        light: "الوضع الفاتح",
        footer1: "حول مشروع Iris",
        footerdesc1:
          "مشروع Iris هو مشروع مفتوح المصدر تعاوني تم إنشاؤه من قبل فريق من المطورين المتحمسين الذين يسعون لجعل تجربة شادرز ماينكرافت هي الأفضل على الإطلاق. تم تطوير Iris بواسطة المجتمع، وللمجتمع.",
        footer2: "روابط مفيدة",
        curseforge: "Iris على CurseForge",
        modrinth: "Iris على Modrinth",
        github: "GitHub",
        discord: "Discord",
        patreon: "Patreon",
        copyright: "© حقوق النشر 2024. مرخص بموجب LGPLv3.",
      },
    },

    zh_Hant: {
      index: {
        title: "這就是 Iris",
        subheading: "打開次世代 Minecraft 光影的大門",
        or: "或者",
        continue: "繼續閱讀",
        heading1: "為什麼選擇 Iris？",
        subheading1: "Iris 因為這些特點而與眾不同",
        card1: "良好的模組相容性",
        carddesc1:
          "Iris 致力於確保模組的相容性作為第一優先度，並且已經與許多你最喜歡的模組一同遊玩！",
        card2: "現代化的設計",
        carddesc2:
          "Iris 是從源頭開始設計的，擴展性高且易於更新。這意味著我們可以很快的為最新版本的 Minecraft 提供支援！",
        card3: "自由且開源",
        carddesc3: "Iris 是開源的 - 這意味著任何人都可以參與 Iris 的開發！",
        heading2: "功能",
        subheading2: "Iris 可以為你帶來……",
        image1: "OptiFine 同等的體驗",
        imagedesc1:
          "Iris 的目標是全面支援所有的 OptiFine 光影包，Iris 支援的光影數量正在不斷的快速增長！<span class='text-span-2'><br>Niko 提供的擷取畫面</span>",
        image2: "相容於 Sodium",
        imagedesc2:
          "Iris 相容 CaffeineMC 系列效能提升模組，例如 Sodium 和 Phosphor。這意味著在體驗驚人的圖形的同時，你可以獲得比原版更高的 FPS！<br><span class='text-span-2'>Guardian 提供的擷取畫面</span>",
        heading3: "Iris 的優勢",
        subheading3: "全新的渲染技術，讓你彷彿身臨其境",
        shadows: "陰影",
        entities: "實體",
        screenshottitle1: "基於效能最佳化的陰影",
        screenshotdesc1:
          "Iris 使用一種叫做陰影截錐剔除的技術來減少陰影對 FPS 的影響，陰影是光影最大的效能消耗。使用 Iris 的陰影截錐剔除，你將能夠達到更高的 FPS，而不犧牲體積光照或陰影的品質。<br><span class='text-span-2'>FoundationGames 提供的擷取畫面</span>",
        screenshottitle2: "高效的實體渲染技術",
        screenshotdesc2:
          "Iris 改進了 Minecraft 渲染實體和方塊實體的方式，如儲物箱、豬和物品展示框。這個技術甚至可以在關閉光影的情況下使用，在有很多實體的世界中，Iris 可以提供高於原版 60% 的效能提升。陰影渲染有了很大的改進，你可以在原本無法使用光影的地方獲得很高的 FPS！<br><span class='text-span-2'>kinzuu_music 提供的擷取畫面</span>",
        stillcurious:
          "還是很好奇嗎？<a href='about.html'>了解更多</a><link rel='prefetch' href='/about.html'>。",
      },
      about: {
        abouttitle: "關於 Iris 光影",
        heading: "Iris 專案",
        subheading: "了解更多關於 Iris 的資訊",
        aboutproject: "關於本專案",
        messageheading: "首席開發人員致辭",
        message:
          "創立 Iris 是為了填補我在 Minecraft 中看到的空白：這個社群缺少一個能夠提供模組相容性高且高效能的開源光影模組。OptiFine 是目前用於載入光影的主流模組。但是 OptiFine 不僅閉源，而且其許可極其的嚴格。這對任何對 OptiFine 的研究和修改都是極其不利的。不僅如此，OptiFine 還因為其與我喜歡的模組存在相容性問題而惡名昭彰。不僅如此，OptiFine 也和 Sodium（一個比 OptiFine 強大得多的開源效能提升模組）不相容。而另一個選擇，ShadersMod，在 1.12 以後就從未更新過，而且它缺乏對許多現代光影包的支援。所以我開發了 Iris，試圖解決這些問題，和解決許多其他的光影包的長期問題。<br><br>Iris 一開始只是想要滿足我自己對光影模組的需求。Iris 和 Sodium 在我的電腦上提供了出色的效能，最終讓我能夠在日常遊戲時使用光影，而不只是偶爾打開它們來拍攝漂亮的擷圖。當然，事實證明，我自己遠不是受 Iris 之益的唯一之人，這就是為什麼我決定開源這個模組並分享給整個 Minecraft 社群。<br><br>Iris有一個用於 1.16 的穩定版本，可以和一個 Iris 專用版的 Sodium 一起使用。我們還有一個用於 1.17 的 beta 版本，目前還不能和 Sodium 一起使用（目前，還沒有針對 1.17 的 Sodium 官方版本）。Iris 目前正緊湊開發中，因此每週都會有所進步！",
        performance: "效能提升",
        performanceheading: "Iris 提供的遊戲效能提升",
        vanilla: "原版無模組",
        vanillamessage:
          "Minecraft 有一個非常古老的程式碼函數庫，許多人都說 Mojang 應該儘快重寫它（特別是圖形的程式碼）。在 1.15 中加入的 Blaze 3D 渲染試圖在某種程度上紓解這個問題，但在很多方面只會使問題惡化。在 1.17 中，Minecraft 改用了 OpenGL Core 3.2 和 Java 16，但到目前為止，也未見其對於效能增強有顯著變化。在 1.17 之前的 Minecraft 也不支援著色器，即使在 1.17 發布後，著色器的支援也是非常有限的。然而，Minecraft 以其低需求的極簡圖形而聞名，並為高效能的基於著色器的圖形提供了強大的基礎。",
        sodium: "原版 + <span class='text-span-4'>Sodium</span>",
        sodiummessage:
          "Sodium 與其他模組不同，是一個重寫了部分原版渲染系統、並將效能最佳化的 Farbric 模組。Sodium 目前仍繼續被維護及更新，更立志成為即使在大型模組包中，依然能與大多數 Fabric 模組相容、提升 FPS。Lithium、Phosphor和Hydrogen，都可以與 Sodium 一起使用，從而從邏輯、照明、和記憶體全方面地最佳化Minecraft。這些模組可以提高 150% 的 FPS。無論你是希望讓高 FPS 給你帶來最大的 PvP 優勢，或是希望在你現有的裝置上玩 Minecraft，Sodium 都是你的不二之選。",
        sodiumiris:
          "原版 + <span class='text-span-4'>Sodium</span> + <span class='text-span-3'>Iris光影</span>",
        sodiumirismessage:
          "Iris 構建在 Sodium 和原生 Minecraft 之上。受益於 Iris 可以和 Sodium 一起使用，即使沒有昂貴的硬體，你也依然可以在享受次世代光影特效的同時獲得驚人的 FPS。雖然需要進行極其複雜的光影處理和計算，Iris 只會降低 10 - 15% 的效能。與 Sodium 搭配更會讓你得到比原生更高的 FPS。在未來，Iris 甚至會集成自己的最佳化系統，讓五六年以前購買的電腦即使在不使用額外的最佳化模組的前提下，依然可以在 60 FPS 以上流暢的運行複雜的光影。",
        screenshot: "螢幕擷取畫面",
        screenshotsubheading: "看看Iris可以為你帶來什麼",
        screenshot1: "Guardian 提供的擷取畫面，使用 SEUS v11",
        screenshot2: "Guardian 提供的擷取畫面，使用 Sildurs Extreme VL",
        screenshot3: "FoundationGames 提供的擷取畫面，使用 Complementary",
        screenshot4: "IMS 提供的擷取畫面，使用 Sildurs Vibrant Extreme VL",
        screenshot5: "IMS 提供的擷取畫面，使用 BSL v8",
        screenshot6: "IMS 提供的擷取畫面，使用 Complementary v4.0",
        screenshot7: "IMS 提供的擷取畫面，使用 Complementary v4.0",
        screenshot8: "IMS 提供的擷取畫面，使用 SEUS Renewed",
        screenshot9: "IMS 提供的擷取畫面，使用 Complementary v4.0",
        screenshot10: "IMS 提供的擷取畫面，使用 Complementary v4.0",
        screenshot11: "kinzuu_music 提供的擷取畫面，使用 Complementary v4.0",
        screenshot12: "Justsnoopy30 提供的擷取畫面，使用 Complementary v4.0 BE",
        note: "注意：BE 代表了擷取畫面中包含了 paulevs 的 BetterEnd 模組",
      },
      download: {
        downloadiris: "下載 Iris - IrisShaders",
        heading: "Iris 光影安裝程式",
        subheading: "一鍵安裝，立即體驗",
        description:
          "Iris 安裝程式會自動下載 Iris 和 Sodium 後安裝。只需要選擇版本和路徑，就可以一鍵安裝 Iris 和 Sodium 到你的遊戲中。",
        downloadjar: "下載 JAR",
        alternatedownloads: "下載JAR手動安裝",
        alternatedownloadsubheading:
          "不喜歡我們的一鍵安裝程式？沒關係，你也可以手動安裝 Iris。",
        getmodrinth: "從 Modrinth 下載",
        getcurseforge: "從 CurseForge 下載",
        getgithub: "從 GitHub 獲取原始碼",
      },
      common: {
        irisshaders: "Iris 光影",
        home: "首頁",
        about: "了解更多",
        download: "立即下載",
        dark: " 深色模式",
        light: " 淺色模式",
        footer1: "關於 Iris 專案",
        footerdesc1:
          "Iris Project 是一個協作的開放原始碼專案，由一個充滿激情的開發團隊製作，旨在提升 Minecraft 的光影體驗。Iris 是由社群開發的，也是為社群服務的。",
        footer2: "相關連結",
        curseforge: "Iris 在 CurseForge",
        modrinth: "Iris 在 Modrinth",
        github: "GitHub",
        discord: "Discord",
        patreon: "Patreon",
        copyright: "版權所有 © 2024 IrisShaders.",
      },
    },
  },
};
export default defineI18nConfig(() => options);

