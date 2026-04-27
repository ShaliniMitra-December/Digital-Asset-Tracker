"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";

export default function Edit() {
  const [asset, setAsset] = useState(null);
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const fetchAsset = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/assets/${id}`);
        setAsset(res.data ?? null);
      } catch (error) {
        console.error("Failed to load asset:", error);
        setAsset(null);
      }
    };

    fetchAsset();
  }, [id]);

  const handleUpdate = async () => {
    if (!asset) return;

    try {
      await axios.put(`http://localhost:5000/assets/${id}`, asset);
      router.push("/");
    } catch (error) {
      console.error("Failed to update asset:", error);
    }
  };

  if (asset === null) {
    return (
      <div className="form-card">
        <p>Loading asset details…</p>
      </div>
    );
  }

  return (
    <div className="form-card">
      <div className="page-header">
        <div>
          <h1 className="page-title">Edit Asset</h1>
          <p className="page-subtitle">Update the title, description, or status for this asset.</p>
        </div>
        <Link href="/" className="button button--secondary">
          Back to Assets
        </Link>
      </div>

      <div className="form-row">
        <input
          className="form-control"
          value={asset.title || ""}
          onChange={(e) => setAsset({ ...asset, title: e.target.value })}
        />

        <textarea
          className="form-control"
          rows={6}
          value={asset.description || ""}
          onChange={(e) => setAsset({ ...asset, description: e.target.value })}
        />

        <select
          className="form-control"
          value={asset.status || "safe"}
          onChange={(e) => setAsset({ ...asset, status: e.target.value })}
        >
          <option value="safe">Safe</option>
          <option value="flagged">Flagged</option>
        </select>

        <button onClick={handleUpdate} className="button button--primary">
          Update Asset
        </button>
      </div>
    </div>
  );
}
