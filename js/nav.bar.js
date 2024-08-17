/* 
<li class="nav-item"><a href="index.html#concept ">About    </a></li>
<li class="nav-item"><a href="index.html#works   ">Works    </a></li>
<li class="nav-item"><a href="index.html#daialy  ">Daialy   </a></li>
<li class="nav-item"><a href="index.html#contact ">Contact  </a></li> 
*/

const navs = [
  { aHref: "index.html#concept", description: "About" },
  { aHref: "index.html#works",   description: "Works" },
  { aHref: "index.html#daialy",  description: "Daialy" },
  { aHref: "index.html#contact", description: "Contact" }
];

document.addEventListener("DOMContentLoaded", () => {
  const navList = document.querySelector(".nav-list");
  navList.innerHTML = navs.map(nav => `
      <li class="nav-item">
          <a href="${nav.aHref}">${nav.description}</a>
      </li>
  `).join('');
});

