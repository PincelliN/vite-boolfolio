const getType = (work) => {
  if (work.type) {
    return work.type.name;
  }
  return "nessun Tipo";
};

const getTechnologies = (work) => {
  if (work.technologies && work.technologies.length) {
    let ListTechnologies = [];
    work.technologies.forEach((tec, i) => {
      if (i == work.technologies.length - 1) {
        ListTechnologies.push(tec.name);
      } else {
        ListTechnologies.push(tec.name + ",");
      }
    });
    return ListTechnologies.join("");
  }
  return "Nessuna Tecnologia associata";
};

const getLocalDate = (data) => {
  return new Date(data).toLocaleDateString();
};

export { getType, getTechnologies, getLocalDate };
