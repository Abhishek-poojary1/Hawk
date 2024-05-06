import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Calendar,
  Edit,
  Save,
  User,
  Mail,
  Tv2,
  Users,
  Phone,
  CircleUser,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const UserDetails = () => {
  const { userdata, updateUserdata, deleteUserdata, isDarkMode } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const [editableUserGroup, setEditableUserGroup] = useState(
    userdata?.UserGroup || ""
  );
  const [editablePhone, setEditablePhone] = useState(userdata?.Phone || "");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState("");

  const handleClose = () => {
    setOpen(false);
    setConfirmDelete("");
  };

  const handleConfirmDelete = () => {
    if (confirmDelete.toLowerCase() === "confirm") {
      deleteUserdata();
      navigate("/Users");
    } else {
      setConfirmDelete("");
    }
  };

  if (!userdata) {
    return <div>Loading...</div>;
  }

  const handleEdit = () => {
    setEditableUserGroup(userdata.UserGroup);
    setEditablePhone(userdata.Phone);
    setIsEditing(true);
  };

  const handleSave = () => {
    updateUserdata({
      UserGroup: editableUserGroup,
      Phone: editablePhone,
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    setOpen(true);
  };

  return (
    <div className="flex flex-col items-center no-scrollbar">
      <div
        className={`h-1/42 w-4/5 shadow-2xl	 my-4 flex flex-col  select-none rounded p-10   ${
          isDarkMode ? "bg-[#313135] text-white" : ""
        }`}
      >
        <div
          className={`flex items-center gap-4 font-medium mb-1.5	 text-xl          
`}
        >
          <div className="flex gap-5 mr-auto">
            <CircleUser />
            User details {userdata.JOBID}
          </div>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            endIcon={<Edit size={18} />}
            onClick={handleEdit}
          >
            Edit
          </Button>
        </div>
        <Divider variant="middle" />
        <div className="row-container">
          <div className="col gap-1 align-middle items-center">
            <User size={16} />
            <span className="label">Name</span>
            <span className="value">{userdata.Name}</span>
          </div>
          <div className="col gap-1 align-middle items-center">
            <Mail size={16} />
            <span className="label">Email :</span>
            <span className="value">{userdata.Email}</span>
          </div>
          <div className="col gap-1 align-middle items-center">
            <Tv2 size={16} />
            <span className="label">User Role:</span>
            <span className="value">{userdata.Role}</span>
          </div>
          <div className="col gap-1 align-middle items-center">
            <Users size={16} />
            <span className="label">UserGroup:</span>
            {isEditing ? (
              <input
                type="text"
                value={editableUserGroup}
                onChange={(e) => setEditableUserGroup(e.target.value)}
              />
            ) : (
              <span className="value">{userdata.UserGroup}</span>
            )}
          </div>
          <div className="col gap-1 align-middle items-center">
            <Phone size={16} />
            <span className="label">Phone:</span>
            {isEditing ? (
              <input
                type="number"
                value={editablePhone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
                  if (value.length <= 10) {
                    // Limit to 10 digits
                    setEditablePhone(value);
                  }
                }}
              />
            ) : (
              <span className="value">{userdata.Phone}</span>
            )}
          </div>
        </div>
        {isEditing && (
          <div className="mt-4 flex self-end">
            <Button
              variant="contained"
              endIcon={<Save size={17} />}
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        )}

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please type "confirm" to delete the user data.
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="confirm"
              name="confirm"
              label="Confirm"
              type="text"
              fullWidth
              variant="standard"
              value={confirmDelete}
              onChange={(e) => setConfirmDelete(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleConfirmDelete}>Delete</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default UserDetails;
