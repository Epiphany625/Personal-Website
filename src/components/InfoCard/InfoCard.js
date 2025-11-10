import React from 'react';
import './InfoCard.css';

const InfoCard = ({
  image,
  title,
  sub,
  description1,
  description2,
  repoLink = 'none',
  webLink = 'none',
  location = 'none',
  badges = [],
}) => {
  let mediaSrc = null;
  if (image) {
    try {
      mediaSrc = require(`../../assets/${image}`);
    } catch (error) {
      mediaSrc = null;
    }
  }

  const links = [
    repoLink !== 'none' && {
      label: 'Code',
      href: repoLink,
      icon: 'fab fa-github',
    },
    webLink !== 'none' && {
      label: 'Launch',
      href: webLink,
      icon: 'fas fa-square-up-right',
    },
  ].filter(Boolean);

  return (
    <article className="info-card glass-panel">
      <div className={`info-card__media ${mediaSrc ? '' : 'placeholder'}`}>
        {mediaSrc ? (
          <img src={mediaSrc} alt={title} />
        ) : (
          <span>{title.charAt(0)}</span>
        )}
      </div>
      <div className="info-card__body">
        <div className="info-card__meta">
          <p className="info-card__subtitle">{sub}</p>
          {location !== 'none' && (
            <p className="info-card__location">
              <i className="fas fa-location-dot info-icon"></i>
              {location}
            </p>
          )}
        </div>
        <h3 className="info-card__title">{title}</h3>
        {badges.length > 0 && (
          <div className="info-card__badges">
            {badges.map((badge) => (
              <span className="tag-chip" key={badge}>
                {badge}
              </span>
            ))}
          </div>
        )}
        {description1 && <p className="info-card__description">{description1}</p>}
        {description2 && <p className="info-card__description">{description2}</p>}
        {links.length > 0 && (
          <div className="info-card__links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="info-card__link"
              >
                <i className={`${link.icon} info-icon`}></i>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default InfoCard;
