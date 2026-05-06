export default function SectionIndicator({ number, label, isFirst, isEnd }) {
  return (
    <div className={`section-indicator ${isFirst ? 'is-first' : ''} ${isEnd ? 'is-end' : ''}`}>
      {/* Top line is omitted for the first section so it starts from mid where the text is */}
      {!isFirst && <div className="indicator-line line-top"></div>}

      <div className="indicator-content">
        {isFirst && <div className="indicator-dot"></div>}
        {number && <span className="indicator-num">{number}</span>}
        {label && <span className="indicator-label">{label}</span>}
        {isEnd && <div className="indicator-dot"></div>}
      </div>

      {!isEnd && <div className="indicator-line line-bottom"></div>}
    </div>
  );
}
