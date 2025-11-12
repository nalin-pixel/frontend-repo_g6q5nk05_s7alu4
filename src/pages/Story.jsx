export default function Story() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
      <p className="text-gray-600 leading-7">
        From the first hello to forever. Share how you met, the moments that brought you closer,
        and the proposal. This page can include a timeline, photos, and little anecdotes your
        guests will love. Send me your content and I'll personalize it here.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold text-gray-800 mb-2">How We Met</h3>
          <p className="text-gray-600">Your sweet beginning...</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold text-gray-800 mb-2">The Proposal</h3>
          <p className="text-gray-600">The big question story...</p>
        </div>
      </div>
    </div>
  )
}
