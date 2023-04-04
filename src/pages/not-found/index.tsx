import { ErrorBoundary } from "../../app/components/ErrorBoundary";

export function NotFoundPage() {
 
  return (
    <ErrorBoundary error={500}/>
  );
}
