import { css } from "@emotion/react";
import { Button } from "./Button";
import { UserIcon } from "./icons/UserIcon";

type HeaderProps = {
  imageUrl: string | null;
};

export const Header = ({ imageUrl }: HeaderProps) => {
  return (
    <header css={header}>
      <img css={imageStyle} src="/src/assets/images/logo.png" alt="ロゴ" />
      {imageUrl ? (
        <div css={buttons}>
          <Button color="secondary">Sign out</Button>
          <UserIcon imageUrl={imageUrl} />
        </div>
      ) : (
        <div css={buttons}>
          <Button css={buttonStyle}>Login</Button>
          <Button css={buttonStyle} color="secondary">Sign up</Button>
        </div>
      )}
    </header>
  );
};

const imageStyle = css`
  width: 100px;
`;

const header = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const buttons = css`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const buttonStyle = css`
  font-size: 1.3rem;
  padding: 8px 15px;
  margin-bottom: 0;
`;

