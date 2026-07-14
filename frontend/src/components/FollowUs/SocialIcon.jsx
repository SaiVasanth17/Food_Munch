function SocialIcon({ Icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="follow-us-icon-container"
    >
      <Icon className="icons" />
    </a>
  );
}

export default SocialIcon;