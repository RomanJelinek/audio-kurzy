export type Lesson = {
  id: string;
  title: string;
  audioUrl: string;
  duration?: string;
  bulletPoints?: { label: string; time: number }[];
};

export type Course = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  accentColor: string;
  accentLight: string;
  lessons: Lesson[];
};

export const courses: Course[] = [
  {
    slug: "jak-vychovat-chlapecka-jak-vychovat-holcicku",
    title: "Respektující výchova",
    description:
      "Komplexní úvod do respektující výchovy zaměřený na role rodičů, důvěru a každodenní rituály doma.",
    icon: "🤝",
    accentColor: "#2E8B57",
    accentLight: "#E6F4ED",
    lessons: [
      {
        id: "jak-jsme-na-tom",
        title: "I. MODUL Jak jsme na tom",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758550039/dovychovat/zakladni%20kurz/1._jak_jsme_na_tom_gdrwck.mp3",
        bulletPoints: [
          {
            label: "Jak funguje naše rodina?",
            time: 0,
          },
          {
            label: "Jak si rozumíme v otázkách výchovy",
            time: 140,
          },
          {
            label: "Jak jsme na tom s důvěrou",
            time: 305,
          },
        ],
      },
      {
        id: "role-rodicu",
        title: "II. MODUL Role rodičů, hierarchie a principy",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758619816/dovychovat/zakladni%20kurz/Role_rodic%CC%8Cu%CC%8A_hierarchie_a_principy_mwuqdd.mp3",
        bulletPoints: [
          {
            label: "Milníky vývoje našich dětí",
            time: 0,
          },
           {
            label: "Hierarchie",
            time: 925,
          },
           {
            label: "Principy – rozdílnost mezi muži a ženami",
            time: 1626,
          },
           {
            label: "Role táty",
            time: 2618,
          },
           {
            label: "Role maminky",
            time: 3255,
          },
           {
            label: "Zženštilí muži a tvrdé ženy",
            time: 3860,
          },
        ],
      },
       {
        id: "prirozena-vychova",
        title: "III. MODUL Základy přirozené výchovy",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758619649/dovychovat/zakladni%20kurz/III._MODUL_Za%CC%81klady_pr%CC%8Cirozene%CC%81_vy%CC%81chovy_vrv7te.mp3",
        bulletPoints: [
          {
            label: "Nošení je přirozená potřeba dětí",
            time: 0,
          },
          {
            label: "Energie je klíčová",
            time: 500,
          },
          {
            label: "Nemusíme být na výchovu sami",
            time: 865,
          },
          {
            label: "Uspávání dětí",
            time: 1345,
          },
          {
            label: "Jakými jsme vzory",
            time: 1940,
          },
          {
            label: "Jak na pláč dítěte",
            time: 2470,
          },
          {
            label: "Jak a kdy předávat zodpovědnost",
            time: 2848,
          },
        ],
      },
       {
        id: "duvera",
        title: "IV. MODUL Co je důležité vědět o důvěře",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758619755/dovychovat/zakladni%20kurz/IV._MODUL_Co_je_du%CC%8Alez%CC%8Cite%CC%81_ve%CC%8Cde%CC%8Ct_o_du%CC%8Ave%CC%8Cr%CC%8Ce_jfitkh.mp3",
        bulletPoints: [
          {
            label: "Nesrovnávejte děti",
            time: 0,
          },
           {
            label: "Ono si zvykne",
            time: 260,
          },
           {
            label: "Říkání pravdy",
            time: 640,
          },
           {
            label: "Co narušuje důvěru",
            time: 1320,
          },
           {
            label: "Lhaní dětí",
            time: 1840,
          },
           {
            label: "Omluvy a poděkování",
            time: 2210,
          },
           {
            label: "Vše je téma aneb když se zeptá",
            time: 2570,
          },
           {
            label: "Kontakt mezi rodiči",
            time: 2935,
          },
           {
            label: "Obnovení důvěry u pubertálních dětí",
            time: 3230,
          },
        ],
      },
       {
        id: "prakticke-tipy",
        title: "V. MODUL Praktické tipy pro domov, jídlo, kapesné",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758619443/dovychovat/zakladni%20kurz/V._MODUL_Prakticke%CC%81_tipy_pro_domov_ji%CC%81dlo_kapesne%CC%81_g9h8tp.mp3",
        bulletPoints: [
          {
            label: "Úpravy domova podle potřeb dítěte",
            time: 0,
          },
           {
            label: "Děti, jídlo a řád",
            time: 432,
          },
           {
            label: "Domácí práce",
            time: 1030,
          },
           {
            label: "Kapesné",
            time: 1470,
          },
        ],
      },
        {
        id: "skolka",
        title: "VI. MODUL Školka, škola, kamarádi",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758619719/dovychovat/zakladni%20kurz/VI._MODUL_S%CC%8Ckolka_s%CC%8Ckola_kamara%CC%81di_bmz4ml.mp3",
        bulletPoints: [
          {
            label: "Děti a školka",
            time: 0,
          },
            {
            label: "Socializace",
            time: 560,
          },
            {
            label: "Zájmové kroužky a koníčky",
            time: 910,
          },
            {
            label: "Tlak sociální skupiny",
            time: 1640,
          },
            {
            label: "Sebevědomí, sebedůvěra, sebehodnota",
            time: 2180,
          },
            {
            label: "Dárky a oslavy",
            time: 2790,
          },
        ],
      },
        {
        id: "neposlusnost",
        title: "VII. MODUL Co když děti neposlouchají",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758619818/dovychovat/zakladni%20kurz/VII._MODUL_Co_kdyz%CC%8C_de%CC%8Cti_neposlouchaji%CC%81_g3i9nb.mp3",
        bulletPoints: [
          {
            label: "Proč děti zlobí",
            time: 0,
          },
           {
            label: "Obranné mechanismy",
            time: 610,
          },
           {
            label: "Svět očima dítěte",
            time: 1770,
          },
           {
            label: "Příkazy a zákazy",
            time: 2210,
          },
           {
            label: "Nastavování hranic",
            time: 2630,
          },
        ],
      },
    ],
  },
  {
    slug: "vychova-kluka",
    title: "Jak vychovat kluka",
    description:
      "Praktický průvodce výchovou chlapce od budování důvěry přes hranice až po pubertu.",
    icon: "🧢",
    accentColor: "#1E88E5",
    accentLight: "#E3F2FD",
    lessons: [
      {
        id: "1",
        title: "1. lekce - Důvěra je klíč k výchově",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758823206/dovychovat/jak%20vychovat%20kluka/1._lekce_-_D%C5%AFv%C4%9Bra_je_kl%C3%AD%C4%8D_k_v%C3%BDchov%C4%9B_hpsk79.mp3",
      },
      {
        id: "2",
        title: "2. lekce - Proč je třeba vychovávat kluky jinak?",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758823322/dovychovat/jak%20vychovat%20kluka/2._lekce_-_Pro%C4%8D_je_t%C5%99eba_vychov%C3%A1vat_kluky_jinak_ulfuhb.mp3",
      },
      {
        id: "3",
        title: "3. lekce - Role mámy a táty",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758823394/dovychovat/jak%20vychovat%20kluka/3._lekce_-_Role_m%C3%A1my_a_t%C3%A1ty_uzj1xj.mp3",
      },
      {
        id: "4",
        title: "4. lekce - Sebevědomí, životní hodnoty a zodpovědnost",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758823461/dovychovat/jak%20vychovat%20kluka/4._Sebeve%CC%8Cdomi%CC%81_z%CC%8Civotni%CC%81_hodnoty_a_zodpove%CC%8Cdnost_d6xym5.mp3",
      },
      {
        id: "5",
        title: "5. lekce - Sourozenci",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758823510/dovychovat/jak%20vychovat%20kluka/5._lekce_-_Sourozenci_jhxket.mp3",
      },
      {
        id: "6",
        title: "6. lekce - Neposlouchání, hranice, dohody",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758823509/dovychovat/jak%20vychovat%20kluka/6._lekce_-_Neposlouch%C3%A1n%C3%AD_hranice_dohody_ybkdvo.mp3",
      },
      {
        id: "7",
        title: "7. lekce - Vztek",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758823197/dovychovat/jak%20vychovat%20kluka/7._lekce_-_Vztek_ityyc7.mp3",
      },
      {
        id: "8",
        title: "8. lekce - Zapojení do kolektivu, školky a školy",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758822961/dovychovat/jak%20vychovat%20kluka/8._lekce_-_Zapojen%C3%AD_do_kolektivu_%C5%A1kolky_a_%C5%A1koly_ltykqr.mp3",
      },
      {
        id: "9",
        title: "9. lekce - Puberta",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758823258/dovychovat/jak%20vychovat%20kluka/9._lekce_-_Puberta_kwzpzw.mp3",
      },
      {
        id: "10",
        title: "10. lekce - Hlavně se z toho nezbláznit",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758822813/dovychovat/jak%20vychovat%20kluka/10._lekce_-_Hlavn%C4%9B_se_z_toho_nezbl%C3%A1znit_pk9qtg.mp3",
      },
      {
        id: "11",
        title: "Bonus - Otázky a odpovědi",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758822961/dovychovat/jak%20vychovat%20kluka/Ota%CC%81zky_a_odpove%CC%8Cdi_g2ptqq.mp3",
      },
    ],
  },
  {
    slug: "vnitrni-pohoda",
    title: "Cesta k vnitřní pohodě",
    description:
      "Sebepoznávací cesta, která pracuje s minulostí, obavami a každodenní vděčností.",
    icon: "🧘",
    accentColor: "#8E24AA",
    accentLight: "#F3E5F5",
    lessons: [
      {
        id: "1",
        title: "1. lekce - Proč je dobré pracovat sám na sobě?",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758819532/dovychovat/Cesta%20k%20vnitr%CC%8Cni%CC%81%20pohode%CC%8C/1._Proc%CC%8C_je_dobre%CC%81_pracovat_sa%CC%81m_na_sobe%CC%8C_p31s74.mp3",
      },
      {
        id: "2",
        title: "2. lekce - Práce s minulostí I. - Popis svého příběhu",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758818979/dovychovat/Cesta%20k%20vnitr%CC%8Cni%CC%81%20pohode%CC%8C/2._Pra%CC%81ce_s_minulosti%CC%81_I._-_Popis_sve%CC%81ho_pr%CC%8Ci%CC%81be%CC%8Chu_cufgwj.mp3",
      },
      {
        id: "3",
        title: "3. lekce - Práce s minulostí II. - Omluvné dopisy",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758819162/dovychovat/Cesta%20k%20vnitr%CC%8Cni%CC%81%20pohode%CC%8C/3._Pra%CC%81ce_s_minulosti%CC%81_II._-_Omluvne%CC%81_dopisy_-_zme%CC%8Cna_perspektivy_vw0fbp.mp3",
      },
      {
        id: "4",
        title: "4. lekce - Práce s minulostí III. - Moje omluvné dopisy",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758819017/dovychovat/Cesta%20k%20vnitr%CC%8Cni%CC%81%20pohode%CC%8C/4._Pra%CC%81ce_s_minulosti%CC%81_III._-_Moje_omluvne%CC%81_dopisy_-_zme%CC%8Cna_perspektivy_v03lzl.mp3",
      },
      {
        id: "5",
        title: "5. lekce - Cesta do tajů naší skryté bolesti",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758818847/dovychovat/Cesta%20k%20vnitr%CC%8Cni%CC%81%20pohode%CC%8C/5._Cesta_do_taju%CC%8A_nas%CC%8Ci%CC%81_skryte%CC%81_bolesti_ku7awc.mp3",
      },
      {
        id: "6",
        title: "6. lekce - Jak najít zdroj svého aktuálního napětí",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758819076/dovychovat/Cesta%20k%20vnitr%CC%8Cni%CC%81%20pohode%CC%8C/6._Jak_naji%CC%81t_zdroj_sve%CC%81ho_aktua%CC%81lni%CC%81ho_nape%CC%8Cti%CC%81_e8nmy4.mp3",
      },
      {
        id: "7",
        title: "7. lekce - Jak změnit naladění Tady a teď?",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758819014/dovychovat/Cesta%20k%20vnitr%CC%8Cni%CC%81%20pohode%CC%8C/7._Jak_zme%CC%8Cnit_nalade%CC%8Cni%CC%81_Tady_a_ted%CC%8C_nedtz8.mp3",
      },
      {
        id: "8",
        title: "8. lekce - Naučme se být vděční",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758819002/dovychovat/Cesta%20k%20vnitr%CC%8Cni%CC%81%20pohode%CC%8C/8._Nauc%CC%8Cme_se_by%CC%81t_vde%CC%8Cc%CC%8Cni%CC%81_jpfnt3.mp3",
      },
      {
        id: "9",
        title: "9. lekce - Soucit, cesta ke zklidnění",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758818895/dovychovat/Cesta%20k%20vnitr%CC%8Cni%CC%81%20pohode%CC%8C/9._Soucit_cesta_ke_zklidne%CC%8Cni%CC%81_rgo6cw.mp3",
      },
      {
        id: "10",
        title: "10. lekce - Jak zatočit s obavami a strachem? - část I.",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758818839/dovychovat/Cesta%20k%20vnitr%CC%8Cni%CC%81%20pohode%CC%8C/10._Jak_zatoc%CC%8Cit_s_obavami_a_strachem_-_c%CC%8Ca%CC%81st_I_lsq81v.mp3",
      },
      {
        id: "11",
        title: "11. lekce - Jak zatočit s obavami a strachem? - část II.",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758819202/dovychovat/Cesta%20k%20vnitr%CC%8Cni%CC%81%20pohode%CC%8C/11._Jak_zatoc%CC%8Cit_s_obavami_a_strachem_-_c%CC%8Ca%CC%81st_II_klplkf.mp3",
      },
      {
        id: "12",
        title: "12. lekce - Jak zatočit s obavami a strachem? - část III.",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758818853/dovychovat/Cesta%20k%20vnitr%CC%8Cni%CC%81%20pohode%CC%8C/12._Jak_zatoc%CC%8Cit_s_obavami_a_strachem_-_c%CC%8Ca%CC%81st_III_hcyf2t.mp3",
      },
      {
        id: "13",
        title: "13. lekce - Jak zatočit s obavami a strachem? - část IV.",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758819018/dovychovat/Cesta%20k%20vnitr%CC%8Cni%CC%81%20pohode%CC%8C/13._Jak_zatoc%CC%8Cit_s_obavami_a_strachem_-_c%CC%8Ca%CC%81st_IV_cqprkq.mp3",
      },
      {
        id: "14",
        title: "14. lekce - Naučme se být velkorysí",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758818828/dovychovat/Cesta%20k%20vnitr%CC%8Cni%CC%81%20pohode%CC%8C/14._Nauc%CC%8Cme_se_by%CC%81t_velkorysi%CC%81_ng1m5k.mp3",
      },
      {
        id: "15",
        title: "15. lekce - S humorem jde všechno líp!",
        audioUrl:
          "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758818837/dovychovat/Cesta%20k%20vnitr%CC%8Cni%CC%81%20pohode%CC%8C/15._S_humorem_jde_vs%CC%8Cechno_li%CC%81p_etbnyh.mp3",
      },
    ],
  },
  {
    slug: "komunikace-bez-kriku",
    title: "7 technik komunikace bez křiku",
    description:
      "Sedm technik klidné komunikace, od pravidel rozhovoru po empatický dialog.",
    icon: "🗣️",
    accentColor: "#FB8C00",
    accentLight: "#FFE8CC",
    lessons: [
      {
        id: "0",
        title: "Předmluva",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758818730/dovychovat/7%20technik%20komunikace%20bez%20kr%CC%8Ciku/0_p%C5%99edmluva_querxr.mp3",
      },
      {
        id: "1",
        title: "1. lekce - Základní pravidla komunikace",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758819278/dovychovat/7%20technik%20komunikace%20bez%20kr%CC%8Ciku/1._LEKCE_Za%CC%81kladni%CC%81_pravidla_komunikace_dy5zpe.mp3",
      },
      {
        id: "2",
        title: "2. lekce - Jak na zájem v komunikaci",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758819358/dovychovat/7%20technik%20komunikace%20bez%20kr%CC%8Ciku/2._LEKCE_Jak_na_za%CC%81jem_v_komunikaci_qbckie.mp3",
      },
      {
        id: "3",
        title: "3. lekce - Odmítnutí přijetím",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758819208/dovychovat/7%20technik%20komunikace%20bez%20kr%CC%8Ciku/3._LEKCE_Odmi%CC%81tnuti%CC%81_pr%CC%8Cijeti%CC%81m_gazoyc.mp3",
      },
      {
        id: "4",
        title: "4. lekce - Popisný způsob zpětné vazby",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758819621/dovychovat/7%20technik%20komunikace%20bez%20kr%CC%8Ciku/4._LEKCE_Popisny%CC%81_zpu%CC%8Asob_zpe%CC%8Ctne%CC%81_vazby_un5jim.mp3",
      },
      {
        id: "5",
        title: "5. lekce - Sendvič",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758819248/dovychovat/7%20technik%20komunikace%20bez%20kr%CC%8Ciku/5._LEKCE_Sendvic%CC%8C_rkzqwm.mp3",
      },
      {
        id: "6",
        title: "6. lekce - Rozvojová zpětná vazba",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758819482/dovychovat/7%20technik%20komunikace%20bez%20kr%CC%8Ciku/6._LEKCE_Rozvojova%CC%81_zpe%CC%8Ctna%CC%81_vazba_eloqoh.mp3",
      },
      {
        id: "7",
        title: "7. lekce - Poraď mi, Co bys dělal(a) kdyby",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758819565/dovychovat/7%20technik%20komunikace%20bez%20kr%CC%8Ciku/7._LEKCE_Porad%CC%8C_mi_Co_bys_de%CC%8Clal_a_kdyby_ad1oec.mp3",
      },
      {
        id: "8",
        title: "8. lekce - Metoda empatického dialogu",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758819647/dovychovat/7%20technik%20komunikace%20bez%20kr%CC%8Ciku/8._LEKCE_Metoda_empaticke%CC%81ho_dialogu_s1h2po.mp3",
      },
    ],
  },
  {
    slug: "konflikty-ve-vztahu",
    title: "Jak zvládat konflikty ve vztahu",
    description:
      "Jak uchopit partnerské konflikty krok za krokem a obnovit vzájemné porozumění.",
    icon: "💞",
    accentColor: "#D81B60",
    accentLight: "#FCE0EB",
    lessons: [
      {
        id: "0",
        title: "Úvod",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758818279/dovychovat/Jak%20zvla%CC%81dat%20konflikty%20ve%20vztahu/0_%C3%9Avodn%C3%AD_video_vybbvb.mp3",
      },
      {
        id: "1",
        title: "1. lekce - Komunikace jako cesta",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758818307/dovychovat/Jak%20zvla%CC%81dat%20konflikty%20ve%20vztahu/1._lekce_-_Komunikace_jako_cesta_ipzy4e.mp3",
      },
      {
        id: "2",
        title: "2. lekce - Princip neporozumění",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758818427/dovychovat/Jak%20zvla%CC%81dat%20konflikty%20ve%20vztahu/2._lekce_-_Princip_neporozume%CC%8Cni%CC%81_l8vxuw.mp3",
      },
      {
        id: "3",
        title: "3. lekce - Metoda empatického dialogu",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758818499/dovychovat/Jak%20zvla%CC%81dat%20konflikty%20ve%20vztahu/3._lekce_-_Metoda_empaticke%CC%81ho_dialogu_wjjdim.mp3",
      },
      {
        id: "4",
        title: "4. lekce - Zajímejte se",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758818441/dovychovat/Jak%20zvla%CC%81dat%20konflikty%20ve%20vztahu/4._lekce_-_Zaji%CC%81mejte_se_xzeypc.mp3",
      },
      {
        id: "5",
        title: "5. lekce - Dejte najevo porozumění",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758818463/dovychovat/Jak%20zvla%CC%81dat%20konflikty%20ve%20vztahu/5._lekce_-_Dejte_najevo_porozume%CC%8Cni%CC%81_zoiv4y.mp3",
      },
      {
        id: "6",
        title: "6. lekce - Popište svůj postoj",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758818374/dovychovat/Jak%20zvla%CC%81dat%20konflikty%20ve%20vztahu/6._lekce_-_Popis%CC%8Cte_svu%CC%8Aj_postoj_hmfbcl.mp3",
      },
      {
        id: "7",
        title: "7. lekce - Dejte návrh koncensu",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758818317/dovychovat/Jak%20zvla%CC%81dat%20konflikty%20ve%20vztahu/7._lekce_-_Dejte_na%CC%81vrh_konsensu_-_zkratit_vtbnyw.mp3",
      },
       {
        id: "8",
        title: "8. lekce - Metoda empatického dialogu",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758819647/dovychovat/7%20technik%20komunikace%20bez%20kr%CC%8Ciku/8._LEKCE_Metoda_empaticke%CC%81ho_dialogu_s1h2po.mp3",
      },
    ],
  },
    {
    slug: "naucte-se-rikat",
    title: "Naučte se říkat, co se vám nelíbí",
    description:
      "Praktické nástroje, jak říkat, co vám vadí, a dávat zpětnou vazbu s respektem.",
    icon: "💬",
    accentColor: "#43A047",
    accentLight: "#E8F5E9",
    lessons: [
      {
        id: "1",
        title: "Lekce 1 - Obecné principy",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758817875/dovychovat/Nauc%CC%8Cte%20se%20r%CC%8Ci%CC%81kat%2C%20co%20se%20va%CC%81m%20neli%CC%81bi%CC%81/Lekce_1_-_Obecne%CC%81_principy_ivp8za.mp3",
      },
       {
        id: "2",
        title: "Lekce 2 - Rozvojový proces",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758817864/dovychovat/Nauc%CC%8Cte%20se%20r%CC%8Ci%CC%81kat%2C%20co%20se%20va%CC%81m%20neli%CC%81bi%CC%81/Lekce_2_-_Rozvojovy%CC%81_proces_detq7e.mp3",
      },
       {
        id: "3",
        title: "Lekce 3 - Sandwich",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758817843/dovychovat/Nauc%CC%8Cte%20se%20r%CC%8Ci%CC%81kat%2C%20co%20se%20va%CC%81m%20neli%CC%81bi%CC%81/Lekce_3_-_Sandwich_dntfli.mp3",
      },
       {
        id: "4",
        title: "Lekce 4 - Popisný způsob zpětné vazby",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758817883/dovychovat/Nauc%CC%8Cte%20se%20r%CC%8Ci%CC%81kat%2C%20co%20se%20va%CC%81m%20neli%CC%81bi%CC%81/Lekce_4_-_Popisny%CC%81_zpu%CC%8Asob_zpe%CC%8Ctne%CC%81_vazby_pbzfus.mp3",
      },
       {
        id: "5",
        title: "Lekce 5 - Poraď mi, co dělám špatně",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758817867/dovychovat/Nauc%CC%8Cte%20se%20r%CC%8Ci%CC%81kat%2C%20co%20se%20va%CC%81m%20neli%CC%81bi%CC%81/Lekce_5_-_Porad%CC%8C_mi_co_de%CC%8Cla%CC%81m_s%CC%8Cpatne%CC%8C_pxochj.mp3",
      },
       {
        id: "6",
        title: "Lekce 6 - Výměna rolí",
        audioUrl: "",
      },
    ],
  },
   {
    slug: "ostatni",
    title: "Krátké kurzy",
    description:
      "Rychlé minikurzy k důvěře dětí, sportovním ambicím i domácímu vzdělávání.",
    icon: "✨",
    accentColor: "#6D4C41",
    accentLight: "#F3E5E0",
    lessons: [
      {
        id: "1",
        title: "Čím ztrácíme důvěru dětí a jak ji získat?",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758818657/dovychovat/C%CC%8Ci%CC%81m_ztra%CC%81ci%CC%81me_du%CC%8Ave%CC%8Cru_de%CC%8Cti%CC%81_a_jak_ji_zi%CC%81skat_muahgi.mp3",
      },
      {
        id: "2",
        title: "Děti a tlak na výkon ve sportu",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758818685/dovychovat/De%CC%8Cti_a_tlak_na_vy%CC%81kon_ve_sportu_gmm1bx.mp3",
      },
      {
        id: "3",
        title: "Na co se připravit u domácího vzdělávání?",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758818190/dovychovat/Na_co_se_pr%CC%8Cipravit_u_doma%CC%81ci%CC%81ho_vzde%CC%8Cla%CC%81va%CC%81ni%CC%81_zfs4jh.mp3",
      },
      {
        id: "4",
        title: "Principy chlapců/mužů",
        audioUrl: "https://res.cloudinary.com/dlwz2y4wk/video/upload/v1758818114/dovychovat/Principy_chlapcu%CC%8A_muz%CC%8Cu%CC%8A_bigz87.mp3",
      },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}
