// Run this script with: node scripts/clear-firestore.js
// This will delete all documents from interviews and feedback collections

const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function deleteCollection(collectionPath, batchSize = 100) {
  const collectionRef = db.collection(collectionPath);
  const query = collectionRef.limit(batchSize);

  return new Promise((resolve, reject) => {
    deleteQueryBatch(query, resolve, reject);
  });
}

async function deleteQueryBatch(query, resolve, reject) {
  const snapshot = await query.get();

  const batchSize = snapshot.size;
  if (batchSize === 0) {
    resolve();
    return;
  }

  const batch = db.batch();
  snapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });
  await batch.commit();

  process.nextTick(() => {
    deleteQueryBatch(query, resolve, reject);
  });
}

async function clearAllData() {
  try {
    console.log("🗑️  Clearing Firestore data...");

    console.log("Deleting interviews collection...");
    await deleteCollection("interviews");
    console.log("✅ Interviews deleted");

    console.log("Deleting feedback collection...");
    await deleteCollection("feedback");
    console.log("✅ Feedback deleted");

    console.log("Deleting users collection...");
    await deleteCollection("users");
    console.log("✅ Users deleted");

    console.log("\n✨ All data cleared successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error clearing data:", error);
    process.exit(1);
  }
}

clearAllData();
