import { useDeleteUserMutation } from "@/graphql/generated"; // Import auto-generated hook
import { Button } from "../ui/button";

const DeleteStudent: React.FC<{ userId: string }> = ({ userId }) => {
  const [deleteUser, { loading, error }] = useDeleteUserMutation();

  const handleDelete = async () => {
    if (!confirm("Apakah Anda yakin ingin menghapus pengguna ini?")) return;
    console.log(userId)
    try {
      await deleteUser({
        variables: { data: userId }
      });

      alert("User berhasil dihapus!");
      location.reload()
    } catch (err) {
      console.error("Gagal menghapus user:", err);
    }
  };

  return (
    <Button onClick={handleDelete} disabled={loading} className="bg-red-500 hover:bg-red-700">
      {loading ? "Menghapus..." : "Hapus"}
    </Button>
  );
};

export default DeleteStudent;
