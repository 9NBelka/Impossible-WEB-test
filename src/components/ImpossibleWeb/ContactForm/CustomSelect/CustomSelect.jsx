import styles from './CustomSelect.module.scss';

export default function CustomSelect({
  isOpen,
  setIsOpen,
  selectedOption,
  setFieldValue,
  handleSelect,
  options,
}) {
  return (
    <div className={styles.selectWrapper}>
      <div
        className={`${styles.select} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || 'Select an area of interest...'}
        <span className={styles.selectArrow}>▼</span>
      </div>

      {isOpen && (
        <div className={styles.optionsList}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.option} ${selectedOption === option.value ? styles.selected : ''}`}
              onClick={() => handleSelect(option.value, setFieldValue)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
