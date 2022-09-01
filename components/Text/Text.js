import styles from './Text.module.css';

const mapToClass = {
  heading1: 'heading1',
  heading2: 'heading2',
  heading3: 'heading3',
  heading4: 'heading4',
  heading5: 'heading5',
  paragraph: 'paragraph',
  subtext: 'subtext',
};

const Base = ({
  as: Component = 'p',
  type = 'paragraph',
  children,
  ...props
}) => (
  <Component {...props} className={styles[mapToClass[type]]}>
    {children}
  </Component>
);

export const Heading1 = (props) => <Base as="h1" type="heading1" {...props} />;

export const Heading2 = (props) => <Base as="h2" type="heading2" {...props} />;

export const Heading3 = (props) => <Base as="h3" type="heading3" {...props} />;

export const Heading4 = (props) => <Base as="h4" type="heading4" {...props} />;

export const Heading5 = (props) => <Base as="h5" type="heading5" {...props} />;

export const Paragraph = (props) => <Base as="p" type="paragraph" {...props} />;

export const Subtext = (props) => <Base as="p" type="subtext" {...props} />;
