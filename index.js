class SkillsList {
  constructor(proffesion) {
    this.proffesion = proffesion;
    this.skills = [];
  }

  getFullList() {
    return this.skills;
  }

  getSkill(requestedSkill) {
    return this.skills.filter((item) => item.skill === requestedSkill);
  }

  getSystem(requestedSystem) {
    return this.skills.filter((item) => item.system === requestedSystem);
  }

  setSkill(company, companyDescription, skill, system, site, description, year) {
    this.skills.push({
      company, companyDescription, skill, system, site, description, year
    });
  }
}

const skillNames = {
  pnr: 'Выполнение пуско-наладочных работ',
  predesign: 'Подготовка проектной документации',
  design: 'Подготовка рабочей документации',
  bothdesign: 'Подготовка проектной и рабочей документации',
  asbuilt: 'Подготовка исполнительной документации',
};
const systemNames = {
  aps: 'АПС',
  appz: 'АППЗ',
  soue: 'СОУЭ',
  skud: 'СКУД',
  cctv: 'СВН',
  scs: 'СКС',
  asutp: 'АСУТП',
  aovk: 'АОВК',
};
const companies = {
  rubezh: { name: 'ГК Рубеж', description: 'Производитель оборудования систем безопасности'},
  mgd: { name: 'ООО Марин Газ Дизайн', description: 'Комплексное проектирование объектов газовой промышленности' },
};
const lvsSkills = new SkillsList('lvs');
lvsSkills.setSkill(companies.rubezh.name,
  companies.rubezh.description,
  skillNames.asbuilt,
  systemNames.aps,
  'Корпуса проведения саммита АТЭС, остров Русский, Приморский край',
  '',
  2011);
lvsSkills.setSkill(companies.rubezh.name,
  companies.rubezh.description,
  skillNames.design,
  systemNames.scs,
  'Завод по производству автокомпонентов на территории ЗАО «Магна Технопласт» индустриального парка «Грабцево», г. Калуга',
  '',
  2009);
lvsSkills.setSkill(companies.mgd.name,
  companies.mgd.description,
  skillNames.design,
  systemNames.asutp,
  'Компрессорная станция «Георгиевск» ООО «Газпром трансгаз Ставрополь»',
  '',
  2011);
lvsSkills.setSkill(companies.mgd.name,
  companies.mgd.description,
  skillNames.bothdesign,
  systemNames.aps,
  'Компрессорная станция «Георгиевск» ООО «Газпром трансгаз Ставрополь»',
  '',
  2011);
lvsSkills.setSkill(companies.mgd.name,
  companies.mgd.description,
  skillNames.bothdesign,
  systemNames.soue,
  'Компрессорные станции «Георгиевск» и «Невинномысск» ООО «Газпром трансгаз Ставрополь»',
  '',
  2013);


const filtered = lvsSkills
  .getFullList()
  .map((item) => `
    <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${item.skill}. <b>${item.system}</b></h5>
      <small>${item.company}, ${item.year}</small>
    </div>
    <p class="mb-1">${item.site}</p>
    <small>Подробнее о ключевых достижениях...</small>
    </a>
    `)
  .join('');
console.log(filtered);

//const data = document.querySelector('.list-group');
//console.log(data);
//data.innerHTML = filtered;


