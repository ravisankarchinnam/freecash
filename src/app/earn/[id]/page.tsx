import EarnDetailContent from "@/components/views/EarnDetailContent";

interface IPageProps {
  params: { id: string };
  searchParams: Record<string | number, string | undefined>;
}

export default function Earn(props: IPageProps) {
  return <EarnDetailContent title={props?.params?.id} />;
}
