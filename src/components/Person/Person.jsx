export const Person = ({ person }) => {
  // eslint-disable-next-line prettier/prettier
  const { name, age, sex, isMarried, partnerName } = person;

  // eslint-disable-next-line prettier/prettier
  const partnerRole = sex === 'm' ? 'wife' : 'husband';

  const partnerText = isMarried
    ? `${partnerName} is my ${partnerRole}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
