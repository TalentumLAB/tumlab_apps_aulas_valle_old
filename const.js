import { textChangeLanguage } from "./locales/index.js";
// import tumlab from "./info/agent.json" assert { type: "json" };

export const LANGUAGE = "language";
export const ACTIVATION_DATE = "18/01/2024";
export const DEFAULT_LANGUAGE = "es";
const SUPPORT_EMAIL = "support@tumlab.com";

export async function getLicense() {
  try {
    const response = await fetch("/info/agent.json");
    const data = await response.json();
    const license_sync = data.tumlab.information[7].license_sync;
    return `"Lab_server_license": "${license_sync}"`;
  } catch (error) {
    console.log(error);
  }
}

export async function getSpecifications() {
  try {
    const response = await fetch("/info/specifications.json");
    const data = await response.json();
    return data.specifications;
  } catch (error) {
    console.log(error);
  }
}

const { configurations, slider, header, sectionApps } = textChangeLanguage();

export const infoSlider = [
  {
    smallTitle: `${slider["slider-first-slide-smallTitle"]}`,
    title: `${slider["slider-first-slide-title"]}`,
    content: `<p data-section="slider" data-value="slider-first-slide-content">${slider["slider-first-slide-content"]}</p>`,
    image: "assets/img/bg-poster.webp",
    buttons: ["omit", "next"],
  },

  {
    title: "Functions and Capabilities",
    content: `
      <ol>
        <li>
          <strong data-section="slider" data-value="slider-second-slide-list-first-title">${slider["slider-second-slide-list-first-title"]}</strong> <span data-section="slider" data-value="slider-second-slide-list-first-content">${slider["slider-second-slide-list-first-content"]}</span>
        </li>
        <li>
          <strong data-section="slider" data-value="slider-second-slide-list-second-title">${slider["slider-second-slide-list-second-title"]}</strong> 
          <span data-section="slider" data-value="slider-second-slide-list-second-content">
         ${slider["slider-second-slide-list-second-content"]}
          </span>
        </li>
        <li>
          <strong data-section="slider" data-value="slider-second-slide-list-third-title">${slider["slider-second-slide-list-third-title"]}</strong> 
          <span data-section="slider" data-value="slider-second-slide-list-third-content">
          ${slider["slider-second-slide-list-third-content"]}
          </span>
        </li>
    </ol>
      `,
    image: "assets/img/bg-poster-2.webp",
    buttons: ["play"],
  },
];

export const menuConfigurations = [
  {
    id: "specifications",
    name: `${configurations["configurations-list-specifications"]}`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00002 2H14C14.7334 2 15.3334 2.6 15.3334 3.33333L15.3267 11.3333C15.3267 12.0667 14.7334 12.6667 14 12.6667H10.6667V14H5.33335V12.6667H2.00002C1.26669 12.6667 0.666687 12.0667 0.666687 11.3333V3.33333C0.666687 2.6 1.26669 2 2.00002 2ZM2.00002 11.3333H14V3.33333H2.00002V11.3333Z" fill="#6B7280"/>
  </svg>`,
    content: `
  <div class="config-list-item">
  <h2 data-section="configurations" data-value="configurations-specifications-title">${configurations["configurations-specifications-title"]}</h2>

  <h5 data-section="configurations" data-value="configurations-operating-system">${configurations["configurations-operating-system"]}</h5>
  <ul class="config-mini-list">
    <li>
      <span data-section="configurations" data-value="configurations-version">${configurations["configurations-version"]}</span><strong> Ubuntu Server v20.04</strong> <span data-section="configurations" data-value="configurations-version-after">${configurations["configurations-version-after"]}</span>
    </li>
  </ul>
  <h5 data-section="configurations" data-value="configurations-interface-version">${configurations["configurations-interface-version"]}</h5>
  <ul class="config-mini-list">
    <li data-section="configurations" data-value="configurations-interface-version-number">${configurations["configurations-interface-version-number"]}</li>
  </ul>
  <h5>Hardware</h5>
  <ul class="config-mini-list">
    <li data-section="configurations" data-value="configurations-hardware-intel">${configurations["configurations-hardware-intel"]}</li>
    <li data-section="configurations" data-value="configurations-hardware-ram">${configurations["configurations-hardware-ram"]}</li>
    <li data-section="configurations" data-value="configurations-hardware-ssd">${configurations["configurations-hardware-ssd"]}</li>
    <li data-section="configurations" data-value="configurations-hardware-hdmi">${configurations["configurations-hardware-hdmi"]}</li>
    <li data-section="configurations" data-value="configurations-hardware-usb">${configurations["configurations-hardware-usb"]}</li>
    <li data-section="configurations" data-value="configurations-hardware-ethernet">${configurations["configurations-hardware-ethernet"]}</li>
    <li data-section="configurations" data-value="configurations-hardware-periferic">${configurations["configurations-hardware-periferic"]}</li>
  </ul>
  <h5 data-section="configurations" data-value="configurations-battery">${configurations["configurations-battery"]}</h5>
  <ul class="config-mini-list">
    <li data-section="configurations" data-value="configurations-battery-type">${configurations["configurations-battery-type"]}</li>
    <li data-section="configurations" data-value="configurations-battery-duration">${configurations["configurations-battery-duration"]}</li>
  </ul>
  <p data-section="configurations" data-value="configurations-battery-description">${configurations["configurations-battery-description"]}</p>
</div>
  `,
  },
  {
    id: "license",
    name: `${configurations["configurations-list-license"]}`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M7.99996 8.66667C7.4444 8.66667 6.97218 8.47222 6.58329 8.08333C6.1944 7.69445 5.99996 7.22222 5.99996 6.66667C5.99996 6.11111 6.1944 5.63889 6.58329 5.25C6.97218 4.86111 7.4444 4.66667 7.99996 4.66667C8.55551 4.66667 9.02774 4.86111 9.41663 5.25C9.80551 5.63889 9.99996 6.11111 9.99996 6.66667C9.99996 7.22222 9.80551 7.69445 9.41663 8.08333C9.02774 8.47222 8.55551 8.66667 7.99996 8.66667ZM3.99996 15.3333V10.1833C3.57774 9.71667 3.24996 9.18333 3.01663 8.58333C2.78329 7.98333 2.66663 7.34445 2.66663 6.66667C2.66663 5.17778 3.18329 3.91667 4.21663 2.88333C5.24996 1.85 6.51107 1.33333 7.99996 1.33333C9.48885 1.33333 10.75 1.85 11.7833 2.88333C12.8166 3.91667 13.3333 5.17778 13.3333 6.66667C13.3333 7.34445 13.2166 7.98333 12.9833 8.58333C12.75 9.18333 12.4222 9.71667 12 10.1833V15.3333L7.99996 14L3.99996 15.3333ZM7.99996 10.6667C9.11107 10.6667 10.0555 10.2778 10.8333 9.5C11.6111 8.72222 12 7.77778 12 6.66667C12 5.55556 11.6111 4.61111 10.8333 3.83333C10.0555 3.05556 9.11107 2.66667 7.99996 2.66667C6.88885 2.66667 5.9444 3.05556 5.16663 3.83333C4.38885 4.61111 3.99996 5.55556 3.99996 6.66667C3.99996 7.77778 4.38885 8.72222 5.16663 9.5C5.9444 10.2778 6.88885 10.6667 7.99996 10.6667ZM5.33329 13.35L7.99996 12.6667L10.6666 13.35V11.2833C10.2777 11.5056 9.85829 11.6806 9.40829 11.8083C8.95829 11.9361 8.48885 12 7.99996 12C7.51107 12 7.04163 11.9361 6.59163 11.8083C6.14163 11.6806 5.72218 11.5056 5.33329 11.2833V13.35Z" fill="#6B7280"/>
    </svg>`,
    content: `
    <div class="config-list-item">
    <h2 data-section="configurations" data-value="configurations-list-license">${configurations["configurations-list-license"]}</h2>
    <p data-section="configurations" data-value="configurations-license-description">${configurations["configurations-license-description"]}</p>

    <div class="license-key">
      <span
      class="activation"
        ></span
      >
      <p><span data-section="configurations" data-value="configurations-license-activation">${configurations["configurations-license-activation"]}</span> <strong data-section="configurations" data-value="configurations-license-date">${ACTIVATION_DATE}</strong></p>
    </div>
  </div>
    `,
  },
  {
    id: "language",
    name: `${configurations["configurations-list-language"]}`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.58002 10.0467L6.88669 8.37333L6.90669 8.35333C8.06669 7.06 8.89335 5.57333 9.38002 4H11.3334V2.66667H6.66669V1.33333H5.33335V2.66667H0.666687V3.99333H8.11335C7.66669 5.28 6.96002 6.5 6.00002 7.56667C5.38002 6.88 4.86669 6.12667 4.46002 5.33333H3.12669C3.61335 6.42 4.28002 7.44667 5.11335 8.37333L1.72002 11.72L2.66669 12.6667L6.00002 9.33333L8.07335 11.4067L8.58002 10.0467ZM12.3334 6.66667H11L8.00002 14.6667H9.33335L10.08 12.6667H13.2467L14 14.6667H15.3334L12.3334 6.66667ZM11.6667 8.44667L10.5867 11.3333H12.7467L11.6667 8.44667Z" fill="#6B7280"/>
  </svg>`,
    content: `<div class="config-list-item">
  <h2 data-section="configurations" data-value="configurations-language-title">${configurations["configurations-language-title"]}</h2>
  <p data-section="configurations" data-value="configurations-language-description">
   ${configurations["configurations-language-description"]}
  </p>

  <div class="container-languages">
    <div class="lang-item">
      <small data-section="configurations" data-value="configurations-language-package">${configurations["configurations-language-package"]}</small>
      <input
        type="radio"
        name="lang"
        value="en"
        id="english"
        checked
      />
      <label for="english"> English (US) </label>
    </div>

    <div class="lang-item">
    <small data-section="configurations" data-value="configurations-language-package">${configurations["configurations-language-package"]}</small>
      <input type="radio" name="lang" value="es" id="spanish" />
      <label for="spanish"> Español (COL) </label>
    </div>
  </div>
</div>`,
  },
  {
    id: "help",
    name: `${configurations["configurations-list-help"]}`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33331 8C1.33331 4.32 4.31998 1.33334 7.99998 1.33334C11.68 1.33334 14.6666 4.32 14.6666 8C14.6666 11.68 11.68 14.6667 7.99998 14.6667C4.31998 14.6667 1.33331 11.68 1.33331 8ZM8.66665 10.6667V12H7.33331V10.6667H8.66665ZM7.99998 13.3333C5.05998 13.3333 2.66665 10.94 2.66665 8C2.66665 5.06 5.05998 2.66667 7.99998 2.66667C10.94 2.66667 13.3333 5.06 13.3333 8C13.3333 10.94 10.94 13.3333 7.99998 13.3333ZM5.33331 6.66667C5.33331 5.19334 6.52665 4 7.99998 4C9.47331 4 10.6666 5.19334 10.6666 6.66667C10.6666 7.52195 10.14 7.98222 9.62715 8.43036C9.14066 8.85551 8.66665 9.26975 8.66665 10H7.33331C7.33331 8.78582 7.96139 8.3044 8.51361 7.88112C8.9468 7.54907 9.33331 7.25281 9.33331 6.66667C9.33331 5.93334 8.73331 5.33334 7.99998 5.33334C7.26665 5.33334 6.66665 5.93334 6.66665 6.66667H5.33331Z" fill="#6B7280"/>
  </svg>`,
    content: `
    <div class="config-list-item">
          <h2 data-section="configurations" data-value="configurations-list-help">${configurations["configurations-list-help"]}</h2>
              <p data-section="configurations" data-value="configurations-help-description">
             ${configurations["configurations-help-description"]}
              </p>
              <h4>${SUPPORT_EMAIL}</h4>
    </div>
  `,
  },
];

export const headerMenulist = [
  {
    id: "talentum-resources",
    name: `${header["header-category-talentum-resources"]}`,
    is_enable: true,
  },
  {
    id: "digital-tools",
    name: `${header["header-category-digital-tools"]}`,
    is_enable: true,
  },
  {
    id: "simulators",
    name: `${header["header-category-simulators"]}`,
    is_enable: false,
  },
  {
    id: "data-infrastructure",
    name: `${header["header-category-data-infrastructure"]}`,
    is_enable: false,
  },
  {
    id: "open-educational-resources",
    name: `${header["header-category-open-educational-resources"]}`,
    is_enable: false,
  },
];

export const apps = [
  {
    category_name: `${header["header-category-talentum-resources"]}`,
    children: [
      {
        id: "tumlab",
        order: 1,
        is_show: true,
        thumbnail: "./assets/recursos-talentum/tumlab_thumbnail.webp",
        video: "./assets/recursos-talentum/videos/recursos-talentum-tumlab.mp4",
        title: `${sectionApps["app-tumlab-title"]}`,
        description: `${sectionApps["app-tumlab-description"]}`,
        url: "http://tumlab.local:3000",
      },
      {
        id: "lms",
        order: 2,
        is_show: true,
        thumbnail: "./assets/recursos-talentum/lms_thumbnail.webp",
        video: "./assets/recursos-talentum/videos/recursos-talentum-lms.mp4",
        title: `${sectionApps["app-lms-title"]}`,
        description: `${sectionApps["app-lms-description"]}`,
        url: "http://tumlab.local:5000",
      },
      {
        id: "steam-classrooms-patia",
        order: 3,
        is_show: false,
        thumbnail: "./assets/recursos-talentum/patia_thumbnail.webp",
        video: "./assets/recursos-talentum/videos/recursos-talentum-patia.mp4",
        title: `${sectionApps["app-steam-classrooms-patia-title"]}`,
        description: `${sectionApps["app-steam-classrooms-patia-description"]}`,
        url: "http://tumlab.local:5000",
      },
      {
        id: "steam-classrooms-valle",
        order: 4,
        is_show: false,
        thumbnail: "./assets/recursos-talentum/steam-valle_thumbnail.webp",
        video:
          "./assets/recursos-talentum/videos/recursos-talentum-steam-valle.mp4",
        title: `${sectionApps["app-steam-classrooms-valle-title"]}`,
        description: `${sectionApps["app-steam-classrooms-valle-description"]}`,
        url: "http://tumlab.local:5000",
      },
    ],
  },

  {
    category_name: `${header["header-category-digital-tools"]}`,
    children: [
      {
        id: "universum",
        order: 1,
        is_show: true,
        thumbnail: "./assets/herramientas-digitales/universum_thumbnail.webp",
        video:
          "./assets/herramientas-digitales/videos/herramientas-digitales-universum.mp4",
        title: `${sectionApps["app-universum-title"]}`,
        description: `${sectionApps["app-universum-description"]}`,
        url: "http://tumlab.local:3003",
      },
      {
        id: "agau",
        order: 2,
        is_show: true,
        thumbnail: "./assets/herramientas-digitales/agau_thumbnail.webp",
        video:
          "./assets/herramientas-digitales/videos/herramientas-digitales-agau.mp4",
        title: `${sectionApps["app-agau-title"]}`,
        description: `${sectionApps["app-agau-description"]}`,
        url: "http://tumlab.local:8083/",
      },
    ],
  },
  {
    category_name: `${header["header-category-simulators"]}`,
    children: [
      {
        id: "simulators-spanish",
        order: 2,
        is_show: true,
        thumbnail: "./assets/simuladores/simulators-spanish_thumbnail.webp",
        video: "./assets/simuladores/videos/simulators-spanish.mov",
        title: `${sectionApps["app-simulators-spanish-title"]}`,
        description: `${sectionApps["app-simulators-spanish-description"]}`,
        url: "http://tumlab.local:8087/phet_es_2022-12/A/index.html",
        ltitle: `${sectionApps["app-simulators-spanish-license-title"]}`,
        ldescription: `${sectionApps["app-simulators-spanish-license-description"]}`,
      },
      {
        id: "simulators-english",
        order: 1,
        is_show: true,
        thumbnail: "./assets/simuladores/simulators-english_thumbnail.webp",
        video: "./assets/simuladores/videos/simulators-english.mov",
        title: `${sectionApps["app-simulators-english-title"]}`,
        description: `${sectionApps["app-simulators-english-description"]}`,
        ltitle: `${sectionApps["app-simulators-english-license-title"]}`,
        ldescription: `${sectionApps["app-simulators-english-license-description"]}`,
        url: "http://tumlab.local:8087/phet_en_2023-01/A/index.html",
      },
    ],
  },
  {
    category_name: `${header["header-category-data-infrastructure"]}`,
    children: [
      {
        id: "apache",
        order: 1,
        is_show: false,
        thumbnail: "./assets/infraestructura-datos/superset_thumbnail.webp",
        video:
          "./assets/infraestructura-datos/videos/infraestructura-datos-apache-superset.mp4",
        title: `${sectionApps["app-apache-title"]}`,
        description: `${sectionApps["app-apache-description"]}`,
        url: "http://tumlab.local:8088",
      },
    ],
  },

  {
    category_name: `${header["header-category-open-educational-resources"]}`,
    children: [
      {
        id: "wikipedia",
        order: 1,
        is_show: true,
        thumbnail: "./assets/recursos-educativos/wikipedia_thumbnail.webp",
        video:
          "./assets/recursos-educativos/videos/recursos-educativos-wikipedia.mp4",
        title: `${sectionApps["app-wikipedia-title"]}`,
        description: `${sectionApps["app-wikipedia-description"]}`,
        url: "http://tumlab.local:8087/wikipedia_es_all_nopic_2022-10/A/Wikipedia:Offline",
        ltitle: `${sectionApps["app-wikipedia-license-title"]}`,
        ldescription: `${sectionApps["app-wikipedia-license-description"]}`,
      },

      {
        id: "media-cms",
        order: 2,
        is_show: true,
        thumbnail: "./assets/recursos-educativos/mediacms_thumbnail.webp",
        bg: "./assets/recursos-educativos/mediacms_bg.webp",
        title: `${sectionApps["app-media-cms-title"]}`,
        description: `${sectionApps["app-media-cms-description"]}`,
        ltitle: `${sectionApps["app-media-cms-license-title"]}`,
        ldescription: `${sectionApps["app-media-cms-license-description"]}`,
        url: "http://tumlab.local:8085",
      },
      {
        id: "open-street-map",
        order: 3,
        is_show: true,
        thumbnail:
          "./assets/recursos-educativos/open-street-map_thumbnail.webp",
        video:
          "./assets/recursos-educativos/videos/recursos-educativos-open-street-map.mp4",
        title: `${sectionApps["app-open-street-map-title"]}`,
        description: `${sectionApps["app-open-street-map-description"]}`,
        ltitle: `${sectionApps["app-open-street-map-license-title"]}`,
        ldescription: `${sectionApps["app-open-street-map-license-description"]}`,
        url: "http://tumlab.local:8081",
      },
      {
        id: "scratch",
        order: 4,
        is_show: true,
        thumbnail: "./assets/recursos-educativos/scratch_thumbnail.webp",
        video:
          "./assets/recursos-educativos/videos/recursos-educativos-scratch.mp4",
		title: `${sectionApps["app-scratch-title"]}`,
		description: `${sectionApps["app-scratch-description"]}`,
		ltitle: `${sectionApps["app-scratch-license-title"]}`,
        ldescription: `${sectionApps["app-scratch-license-description"]}`,
        url: "http://192.168.4.1:8086",
      },
      {
        id: "krita",
        order: 5,
        is_show: false,
        thumbnail: "./assets/recursos-educativos/krita_thumbnail.webp",
        video:
          "./assets/recursos-educativos/videos/recursos-educativos-krita.mp4",
        title: `${sectionApps["app-krita-title"]}`,
        description: `${sectionApps["app-krita-description"]}`,
        url: "http://tumlab.local/krita/krita-x64-5.2.2-setup.exe",
        ltitle: `${sectionApps["app-krita-license-title"]}`,
        ldescription: `${sectionApps["app-krita-license-description"]}`,
      },
    ],
  },
];
