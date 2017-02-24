/*

	git push操作的完整命令是：
	git push <远程主机名> <本地分支名>:<远程分支名>

    如果省略远程分支名，则表示将本地分支推送与之存在"追踪关系"的远程分支（通常两者同名）。
    如果该远程分支不存在，则会被新建。

	git push origin master
	上面命令表示，将本地的master分支推送到origin主机的master分支。如果后者不存在，则会被新建。

	如果你在当前文件夹中执行过 git remote add，命令应该是
	git remote add origin https://github.com/yourName/yourRepo.git
	origin 不是仓库名。而是给远程仓库在本地起的一个别名。

*/
