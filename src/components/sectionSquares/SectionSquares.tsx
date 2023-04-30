import { FC, ReactNode } from "react";

type Props = {
	children?: ReactNode;
};

export const SectionSquares: FC<Props> = ({ children }) => {
	return <section className="section-squares">{children}</section>;
};
