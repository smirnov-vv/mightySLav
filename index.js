class Company {
    constructor(company, description) {
        this.company = company;
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
        this.skills.push({ skill, system, site, year, description });
    }
}
const skills = {
    pnr: 'Пуско-наладочные работы',
    predesign: 'Подготовка ПД',
    design: 'Подготовка РД',
    asbuilt: 'Подготовка ИД',
}
const systems = {
    aps: 'АПС',
    appz: 'АППЗ',
    soue: 'СОУЭ',
    skud: 'СКУД',
    cctv: 'СВН',
    scs: 'СКС',
    asutp: 'АСУТП',
}
const rubezh1 = new Company('ГК Рубеж', 'Производитель оборудования систем безопасности');
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


    const mgd = new Company('ООО "Марин Газ Дизайн"', 'Комплексное проектирование объектов газовой промышленности');
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

const filtered = rubezh1
    .getSystem(systems.scs)
    .map((item) => `<center><p>${item.skill}<br><b>${item.system}</b><br>${item.site}<br>${item.year}<br>${item.description}<br></p></center>`)
    .join(''));

const data = document.querySelector('[data-info]');
console.log(data);
acol.innerHTML = filtered;