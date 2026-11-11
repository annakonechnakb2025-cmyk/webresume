import { useEffect, useState } from "react";
    
function Reviews({ isDark }) {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getComments() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts/13/comments"
                );

                if (!response.ok) {
                    throw new Error("Не вдалося отримати коментарі");
                }

                const data = await response.json();
                setComments(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        getComments();
    }, []);

    const theme = isDark
        ? "bg-[#292434] border-[#756080] text-[#c9b8d6]"
        : "bg-[#f4e2bb] border-[#8B5A2B] text-[#5c3a21]";

    return (
        <section className={`border-4 rounded-xl p-4 sm:p-6 my-6 ${theme}`}>
            <h2 className="text-xl font-bold mb-4">
                Відгуки роботодавців
            </h2>

            {loading && <p>Завантаження коментарів...</p>}

            {error && <p>Помилка: {error}</p>}

            {!loading && !error && (
                <div className="space-y-4">
                    {comments.map((comment) => (
                        <article
                            key={comment.id}
                            className="border border-dashed rounded-lg p-3"
                        >
                            <h3 className="font-bold break-words">
                                {comment.name}
                            </h3>

                            <p className="text-xs my-2 break-all">
                                {comment.email}
                            </p>

                            <p className="break-words">
                                {comment.body}
                            </p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Reviews;