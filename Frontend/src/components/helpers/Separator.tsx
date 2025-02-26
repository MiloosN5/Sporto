import SeparatorIcon from '../../assets/images/icons/TrophyIcon.svg'

const Separator = () => {

  return (
    <div className='separator'>
      <div
        className="separator__icon"
        style={{ backgroundImage: `url("${SeparatorIcon}")` }}
      ></div>
    </div>
  );
};

export default Separator;