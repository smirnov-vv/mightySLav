class Company {
  constructor(company, description, type) {
    this.company = company;
    this.description = description;
    this.type = type;
    this.skills = [];
  }

  getCompany() {
    return this.company;
  }

  getSkill(requestedSkill) {
    return this.skills.filter((item) => item.skill === requestedSkill);
  }

  getSystem(requestedSystem) {
    return this.skills.filter((item) => item.system === requestedSystem);
  }

  setSkill(skill, system, site, year, description) {
    this.skills.push({
      skill, system, site, year, description,
    });
  }
}
const skills = {
  pnr: 'Выполнение пуско-наладочных работ',
  predesign: 'Подготовка проектной документации',
  design: 'Подготовка рабочей документации',
  asbuilt: 'Подготовка исполнительной документации',
};
const systems = {
  aps: 'АПС',
  appz: 'АППЗ',
  soue: 'СОУЭ',
  skud: 'СКУД',
  cctv: 'СВН',
  scs: 'СКС',
  asutp: 'АСУТП',
};
const rubezh1 = new Company('ГК Рубеж', 'Производитель оборудования систем безопасности', 'lvs');
rubezh1.setSkill(skills.asbuilt,
  systems.aps,
  'Корпуса проведения саммита АТЭС, остров Русский, Приморский край',
  2011,
  '');
rubezh1.setSkill(skills.design,
  systems.scs,
  'Завод по производству автокомпонентов на территории ЗАО «Магна Технопласт» индустриального парка «Грабцево», г. Калуга',
  2009,
  '');

const mgd = new Company('ООО "Марин Газ Дизайн"', 'Комплексное проектирование объектов газовой промышленности', 'lvs');
mgd.setSkill(skills.design,
  systems.asutp,
  'Компрессорная станция «Георгиевск» ООО «Газпром трансгаз Ставрополь»',
  2011,
  '');
mgd.setSkill(skills.predesign,
  systems.aps,
  'Компрессорные станции «Георгиевск» и «Невинномысск» ООО «Газпром трансгаз Ставрополь»',
  2013,
  '');
mgd.setSkill(skills.design,
  systems.aps,
  'Компрессорные станции «Георгиевск» и «Невинномысск» ООО «Газпром трансгаз Ставрополь»',
  2013,
  '');
mgd.setSkill(skills.predesign,
  systems.soue,
  'Компрессорные станции «Георгиевск» и «Невинномысск» ООО «Газпром трансгаз Ставрополь»',
  2013,
  '');
mgd.setSkill(skills.design,
  systems.soue,
  'Компрессорные станции «Георгиевск» и «Невинномысск» ООО «Газпром трансгаз Ставрополь»',
  2013,
  '');

const filtered = mgd
  .getSystem(systems.aps)
  .map((item) => `<a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${item.skill}. <b>${item.system}</b></h5>
      <small>${mgd.getCompany()}, ${item.year}</small>
    </div>
    <p class="mb-1">${item.site}</p>
    <small>Подробнее о ключевых достижениях...</small>
    </a>`)
  .join('');
// console.log(filtered);

const data = document.querySelector('.list-group');
console.log(data);
data.innerHTML = filtered;
