"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/assets", {
        title,
        description,
      });
      router.push("/");
    } catch (error) {
      console.error("Failed to create asset:", error);
    }
  };

  return (
    <div className="form-card">
      <div className="page-header">
        <div>
          <h1 className="page-title">Create Asset</h1>
          <p className="page-subtitle">Add a new digital asset with a title and description.</p>
        </div>
        <Link href="/" className="button button--secondary">
          Back to Assets
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="form-row">
        <input
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="form-control"
          rows={6}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" className="button button--primary">
          Create Asset
        </button>
      </form>
    </div>
  );
}
