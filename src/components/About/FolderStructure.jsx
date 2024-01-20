import * as React from 'react';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FolderIcon from '@mui/icons-material/Folder'
import File from '@mui/icons-material/FileCopy'
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

export default function FolderStructure() {
    const treeItemStyles = {
        textAlign: 'left',
        fontSize: '0.875rem',
    };
    return (
        <Box sx={{
            minHeight: 180,
            flexGrow: 1,
            maxWidth: 300,
            bgcolor: 'transparent',
            p: 2,
        }}>
            <TreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
            >
                <TreeItem nodeId="1" label="src" sx={treeItemStyles} icon={<FolderIcon />}>
                    <TreeItem nodeId="2" label="Components" icon={<FolderIcon />}>
                        <TreeItem nodeId='3' label="About" icon={<FolderIcon />} />
                        <TreeItem nodeId='13' label="Card" icon={<FolderIcon />} />
                        <TreeItem nodeId='14' label="Homepage" icon={<FolderIcon />} />
                        <TreeItem nodeId='15' label="Login" icon={<FolderIcon />} />
                        <TreeItem nodeId='16' label="MyCart" icon={<FolderIcon />} />
                        <TreeItem nodeId='17' label="Signup" icon={<FolderIcon />} />
                    </TreeItem>
                    <TreeItem nodeId="4" label="Context" sx={treeItemStyles} icon={<FolderIcon />}>
                        <TreeItem nodeId='3' label="AuthContext" icon={<File />} />
                        <TreeItem nodeId='3' label="ProductContext" icon={<File />} />
                    </TreeItem>
                    <TreeItem nodeId="7" label="GoogleAuth" sx={treeItemStyles} icon={<FolderIcon />}>
                        <TreeItem nodeId='3' label="config.js" icon={<File />} />
                    </TreeItem>
                    <TreeItem nodeId="9" label="images" sx={treeItemStyles} icon={<FolderIcon />}>
                        <TreeItem nodeId='3' label="check.png" icon={<File />} />
                        <TreeItem nodeId='3' label="google.png" icon={<File />} />
                        <TreeItem nodeId='3' label="loginbg.png" icon={<File />} />
                        <TreeItem nodeId='3' label="prov-store.png" icon={<File />} />
                        <TreeItem nodeId='3' label="wrong.png" icon={<File />} />
                    </TreeItem>
                    <TreeItem nodeId="10" label="utils" sx={treeItemStyles} icon={<FolderIcon />}>
                        <TreeItem nodeId='3' label="TxtToSha256" icon={<File />} />
                    </TreeItem>
                </TreeItem>
                <TreeItem nodeId='11' label="index.js" sx={treeItemStyles} icon={<File />} />
                <TreeItem nodeId='11' label="index.css" sx={treeItemStyles} icon={<File />} />
                <TreeItem nodeId='11' label="reportWebVitals" sx={treeItemStyles} icon={<File />} />
                <TreeItem nodeId='11' label="setupTests" sx={treeItemStyles} icon={<File />} />
                <TreeItem nodeId='11' label="validationRules.json" sx={treeItemStyles} icon={<File />} />
            </TreeView>
        </Box>
    );
}