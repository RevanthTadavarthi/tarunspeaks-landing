import Link from "next/link";

/**
 * Success Page
 * 
 * This page is shown after a successful payment.
 * It confirms the enrollment and provides next steps for the student.
 */
export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-accent/10 border-2 border-secondary rounded-2xl p-12">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-3xl font-bold text-primary mb-4">
            Payment Successful!
          </h1>
          <p className="text-primary/80 mb-8 text-lg">
            Congratulations! You&apos;ve successfully enrolled in Roadmap to Digital Marketing 2.0.
            We&apos;ll send you a confirmation email with all the details shortly.
          </p>
          <div className="space-y-4">
            <p className="text-primary/70">
              <strong>What&apos;s Next?</strong>
            </p>
            <ul className="text-left text-primary/80 space-y-2 max-w-md mx-auto">
              <li>✓ Check your email for enrollment confirmation</li>
              <li>✓ Join our community platform (link will be sent)</li>
              <li>✓ Access pre-course materials</li>
              <li>✓ Mark your calendar for the cohort start date</li>
            </ul>
          </div>
          <div className="mt-8">
            <Link
              href="/"
              className="bg-accent hover:bg-accent/90 text-primary px-8 py-3 rounded-lg font-semibold transition-all inline-block"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

