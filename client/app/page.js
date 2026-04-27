"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const [assets, setAssets] = useState([]);

  const fetchAssets = async () => {
    try {
      const res = await axios.get("http://localhost:5000/assets");
      setAssets(res.data || []);
    } catch (error) {
      console.error("Failed to fetch assets:", error);
    }
  };

  const deleteAsset = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/assets/${id}`);
      await fetchAssets();
    } catch (error) {
      console.error("Failed to delete asset:", error);
    }
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  return (
    <div>
      <section className="page-header">
        <div>
          <h1 className="page-title">Digital Assets</h1>
          <p className="page-subtitle">
            Manage your tracked digital items in one clean dashboard. Add new assets, edit existing values, or remove assets as needed.
          </p>
        </div>

        <Link href="/create" className="button button--primary">
          Add Asset
        </Link>
      </section>

      <section className="asset-list">
        {assets.length === 0 ? (
          <div className="asset-card">
            <h2>No assets found</h2>
            <p className="page-subtitle">Create your first asset to start tracking value, descriptions, and status.</p>
          </div>
        ) : (
          assets.map((asset) => (
            <article key={asset.id} className="asset-card">
              <div className="asset-meta">
                <h2>{asset.title}</h2>
                <span className={asset.status === "flagged" ? "tag tag--warning" : "tag tag--success"}>
                  {asset.status}
                </span>
              </div>
              <p>{asset.description}</p>
              <div className="card-actions">
                <Link href={`/edit/${asset.id}`} className="button button--secondary">
                  Edit
                </Link>
                <button onClick={() => deleteAsset(asset.id)} className="button button--danger">
                  Delete
                </button>
              </div>
            </article>
          ))
        )}
      </section>
    </div>
  );
}
